import {Request, Response} from 'express';

import pool from '../database';

class CatedraticoController {

    public async list(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
       await pool.query("select idCatedratico, CONCAT(Nombre,' ',Apellido) as Nombre from catedratico order by Nombre, Apellido",'', function(err, result, fields) {
            if (err) throw err;
            if(result.length > 0){
                res.json(result);
            }else{
                res.status(404).json({ text: "Catedraticos no existen!!!" });
            }        
        });
    }
        
public async getone(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
   await pool.query('select * from Usuario where idUsuario=?', [id], function(err, result, fields) {
        if (err) throw err;
        if(result.length > 0){
            res.json(result);
        }else{
            res.status(404).json({ text: "El Usuario no existe" });
        }        
    });
}

    public async create (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO usuario set ?',req.body);
        res.json({message: 'User saved......'});
    }

    public async update(req: Request, res:Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Usuario set ? WHERE idUsuario =?',[req.body,id]);
        res.json({ message: 'El Idsuario fue actualizado...  : ' + [id]});
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM usuario WHERE idUsuario =?',[id]);
        res.json({message: 'Deleted....  : ' + [id]});
    }
}


const  catedraticoController = new CatedraticoController();

export default catedraticoController;




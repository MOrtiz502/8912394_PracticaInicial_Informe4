import {Request, Response} from 'express';

import pool from '../database';

class RegistroUserController {


    public async validarRegistro (req: Request, res: Response): Promise<any> {
        const { carnet, dpi } = req.params;

        const str_a = "select * from Usuario b ";
        const str_b = str_a + " ";
        const sqlString = str_b + "where (b.dpi='"+[dpi]+"' or b.carnet='"+[carnet]+"')";

        console.log('query=> :',sqlString);

       await pool.query(sqlString,'', function(err, result, fields) {
            if (err) throw err;
            if(result.length > 0){
                res.json(result);
            }else{
                res.status(404).json({ text: "Comentarios por Publicación no existen!!!!" });
            }
        });
    }    
        
    public async create (req: Request, res: Response): Promise<void>{
        console.log('Grabara este registro de usuario => ')
        console.log(req.body);        
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


const  registrouserController = new RegistroUserController();

export default registrouserController;




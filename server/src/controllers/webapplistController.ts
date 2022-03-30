import {Request, Response} from 'express';

import pool from '../database';

class WebapplistController {

/*
    public async list (req: Request, res: Response): Promise<void> {
        const usuario = await pool.query('select * from Usuario');
        res.json({ text: 'Listing info...'});
        if (usuario.values?.length > 0 ) {
            console.log(usuario.values);
        }
        else {
            console.log('Registro vacio...');
        }
      
        pool.getConnection(async function(err, connection) {

        var getUserSql = "select idUsuario,dpi,carnet,nombre,apellido,contrasenia,correo,estudiante from Usuario";

        await connection.query(getUserSql,'', function(err, result) {
               if (err) {
                 console.log('Error: ' + err.message);
                 return;
               }
               console.log('[list] -> Resolvio el query - Select ...');
               res.json(result);
            })
        });
    }
*/
    public async listSinId(req: Request, res: Response): Promise<any> {
        console.log("entro al List de WebapplitController.ts");
        const { id } = req.params;
        console.log("id para lista usuarios:", [id] );
        const sqlString= "select * from Usuario where idUsuario != " + id;
        console.log('string de sql', sqlString);
       await pool.query(sqlString,'', function(err, result, fields) {
            if (err) throw err;
            if(result.length > 0){
                console.log(result);
                res.json(result);
            }else{
                res.status(404).json({ text: "Usuarios no existen!!!" });
            }        
        });
    }
        
/*
    public async getone (req: Request, res: Response): Promise<any>{
            pool.getConnection(async function(err, connection) {

            var getUserSql = "select * from Usuario where idUsuario=?";
            const { id } = req.params;
    
             await connection.query(getUserSql,[id], function(err, result) {
                   if (err) {
                     console.log('Error: ' + err.message);
                     return;
                   }
                   if (result.length > 0) {
                        console.log('[getone] -> Resolvio el query - Select ...');
                        return res.json(result[0]);
                   }                
                   console.log('usuario no existe');
                   res.status(404).json({ text: "El idUsuario no existe"});
                })
            });
    }
*/

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


const  webapplistController = new WebapplistController();

export default webapplistController;




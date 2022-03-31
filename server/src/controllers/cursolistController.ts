import {Request, Response} from 'express';

import pool from '../database';

class CursolistController {

    public async list(req: Request, res: Response): Promise<any> {
        console.log("entro al List de CursolistController.ts");
        const { id } = req.params;
        console.log("id para lista cursos aprobados:", [id] );
        const sqlString= "select A.idCursoAprobado, A.idUsuario, A.idCurso, A.nota, left(A.fecha_aprobado,10) as fecha_aprobado, B.Nombre from Curso_Aprobado A, Curso B where A.idCurso = B.IdCurso and A.idUsuario = " + id + " order by A.fecha_creación desc";
       await pool.query(sqlString,'', function(err, result, fields) {
            if (err) throw err;
            if(result.length > 0){
                res.json(result);
            }else{
                res.status(404).json({ text: "Cursos Aprobados no existen!!!!" });
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


const  cursolistController = new CursolistController();

export default cursolistController;




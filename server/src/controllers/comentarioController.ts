import {Request, Response} from 'express';

import pool from '../database';

class ComentarioController {



    public async listComentByidPublicacion(req: Request, res: Response): Promise<any> {
          const { idPublicacion } = req.params;

        const str_a = "select A.idComentario, A.idPublicacion, A.idUsuario, concat(U.Nombre,' ',U.Apellido) as UserNombre, ";
        const str_b = str_a + " ";
        const str_c = str_b + " A.comentario, A.fecha_creacion ";
        const str_d = str_c + "from Comentario as A ";
        const str_e = str_d + "left join Usuario as U on A.idUsuario = U.idUsuario ";
        const str_f = str_e  + "where A.idPublicacion = " + idPublicacion;
        const str_g = str_f + " ";
        const str_h = str_g + " ";
        const str_i = str_h + " ";
        const sqlString = str_i + "order by A.fecha_creacion"
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
        console.log(req.body);
        console.log(req.body.idUsuario);
        const str_a = "INSERT INTO Comentario (idPublicacion,idUsuario,comentario) ";
        const str_b = str_a + "values("+req.body.idPublicacion+","+req.body.idUsuario;
        const strSql = str_b + ",'" + req.body.comentario+"')";
        console.log('query=> :',strSql);
        await pool.query(strSql,'');
        //await pool.query('INSERT INTO Coemntario set ?',req.body);
        res.json({message: 'Comentario guardada......'});
    }
}


const  comentarioController = new ComentarioController();

export default comentarioController;




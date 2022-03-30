import {Request, Response} from 'express';

import pool from '../database';

class PostaddController {

    public async create (req: Request, res: Response): Promise<void>{
        const str_a = "INSERT INTO Publicacion (idUsuario,idCurso,idCatedratico,idAuxiliar,texto) ";
        const str_b = str_a + "values("+req.body.idUsuario+","+req.body.idCurso+","+req.body.idCatedratico;
        const strSql = str_b + "," + req.body.idAuxiliar + ",'"+ req.body.texto+"')";
        console.log("sql=> "+strSql);
        await pool.query(strSql,'');
       // res.json({message: 'Publicacion guardada......'});
    }
}


const  postaddController = new PostaddController();

export default postaddController;




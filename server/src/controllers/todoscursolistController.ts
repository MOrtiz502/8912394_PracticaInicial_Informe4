import {Request, Response} from 'express';

import pool from '../database';

class TodosCursolistController {

    public async list(req: Request, res: Response): Promise<any> {

        const sqlString= "select idCurso as id, Nombre from Curso ";

       await pool.query(sqlString,'', function(err, result, fields) {
            if (err) throw err;
            if(result.length > 0){
                res.json(result);
            }else{
                res.status(404).json({ text: "Cursos no existen!!!!" });
            }        
        });
    }



}


const  todoscursolistController = new TodosCursolistController();

export default todoscursolistController;




import {Request, Response} from 'express';

import pool from '../database';

class HorarioCatedraticoController {

    public async list(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const str_a = "select A.idCatedratico as id, CONCAT(A.Nombre,' ',A.Apellido) as Nombre ";
        const str_b = str_a + "from catedratico as A, Horario as B ";
        const str_c = str_b + "where A.idCatedratico = B.idCatedratico ";
        const str_d = str_c + "and   B.idCurso =?";
        const strSql = str_d + " order by A.Nombre, A.Apellido";
        console.log('query: => ',strSql);
       await pool.query(strSql,[id], function(err, result, fields) {
            if (err) throw err;
            if(result.length > 0){
                res.json(result);
            }else{
                res.status(404).json({ text: "Catedraticos no existen!!!" });
            }        
        });
    }
}
        
const  horariocatedraticoController = new HorarioCatedraticoController();

export default horariocatedraticoController;




import {Request, Response} from 'express';

import pool from '../database';

class HorarioAuxiliarController {

    public async list(req: Request, res: Response): Promise<any> {
        const { idCurso, idCatedratico } = req.params;
        const str_a = "select A.idAuxiliar as id, CONCAT(A.Nombre,' ',A.Apellido) as Nombre ";
        const str_b = str_a + "from Auxiliar as A, Horario as B ";
        const str_c = str_b + "where A.idAuxiliar = B.idAuxiliar ";
        const str_d = str_c + "and   B.idCurso ="+idCurso+" and B.idCatedratico ="+idCatedratico;
        const strSql = str_d + " order by A.Nombre, A.Apellido";
        console.log('query: => ',strSql);
       await pool.query(strSql,'', function(err, result, fields) {
            if (err) throw err;
            if(result.length > 0){
                res.json(result);
            }else{
                res.status(404).json({ text: "Catedraticos no existen!!!" });
            }        
        });
    }
}
        
const  horarioauxiliarController = new HorarioAuxiliarController();

export default horarioauxiliarController;




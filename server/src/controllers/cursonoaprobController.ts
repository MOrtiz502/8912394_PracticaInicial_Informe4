import {Request, Response} from 'express';

import pool from '../database';

class CursoNoAprobController {

    public async list(req: Request, res: Response): Promise<any> {
        const { idUsuario } = req.params;
        console.log("id para lista cursos no aprobados:", [idUsuario] );
        const str_a = "select A.idCurso as id, A.Nombre from Curso A ";
        const str_b= str_a + "left join Curso_Aprobado B ON B.idCurso = A.idCurso and B.idUsuario = "+idUsuario;
        const sqlString = str_b + " WHERE B.idCurso is NULL ";
        console.log('Query=>: '+ sqlString)
        
       await pool.query(sqlString,'', function(err, result, fields) {
            if (err) throw err;
            if(result.length > 0){
                res.json(result);
            }else{
                res.status(404).json({ text: "Cursos Aprobados no existen!!!!" });
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
    console.log(req.body);
    console.log(req.body.idUsuario);
    const str_a = "INSERT INTO Curso_Aprobado (idUsuario,idCurso,nota,fecha_aprobado) ";
    const str_b = str_a + "values("+req.body.idUsuario+","+req.body.idCurso+","+req.body.nota;
    const strSql = str_b + ",'" + req.body.fecha_aprobado+"')";
    console.log('query=> :',strSql);
    await pool.query(strSql,'');
    //await pool.query('INSERT INTO Coemntario set ?',req.body);
    res.json({message: 'Comentario guardada......'});
}

    public async update(req: Request, res:Response): Promise<void> {
        const { id } = req.params;
       
        //console.log('UPDATE Curso_Aprobado set ? WHERE idcursoAprobado =?',[req.body,id]);

        await pool.query('UPDATE Curso_Aprobado set ? WHERE idcursoAprobado =?',[req.body,id]);
        res.json({ message: 'El curso Aprobado fue actualizado...  : ' + [id]});
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Curso_Aprobado WHERE idCursoAprobado =?',[id]);
        res.json({message: 'Deleted....  : ' + [id]});
    }
}


const  cursonoaprobController = new CursoNoAprobController();

export default cursonoaprobController;




"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class CursoNoAprobController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idUsuario } = req.params;
            console.log("id para lista cursos no aprobados:", [idUsuario]);
            const str_a = "select A.idCurso as id, A.Nombre from Curso A ";
            const str_b = str_a + "left join Curso_Aprobado B ON B.idCurso = A.idCurso and B.idUsuario = " + idUsuario;
            const sqlString = str_b + " WHERE B.idCurso is NULL ";
            console.log('Query=>: ' + sqlString);
            yield database_1.default.query(sqlString, '', function (err, result, fields) {
                if (err)
                    throw err;
                if (result.length > 0) {
                    res.json(result);
                }
                else {
                    res.status(404).json({ text: "Cursos Aprobados no existen!!!!" });
                }
            });
        });
    }
    getone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('select * from Usuario where idUsuario=?', [id], function (err, result, fields) {
                if (err)
                    throw err;
                if (result.length > 0) {
                    res.json(result);
                }
                else {
                    res.status(404).json({ text: "El Usuario no existe" });
                }
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            console.log(req.body.idUsuario);
            const str_a = "INSERT INTO Curso_Aprobado (idUsuario,idCurso,nota,fecha_aprobado) ";
            const str_b = str_a + "values(" + req.body.idUsuario + "," + req.body.idCurso + "," + req.body.nota;
            const strSql = str_b + ",'" + req.body.fecha_aprobado + "')";
            console.log('query=> :', strSql);
            yield database_1.default.query(strSql, '');
            //await pool.query('INSERT INTO Coemntario set ?',req.body);
            res.json({ message: 'Comentario guardada......' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            //console.log('UPDATE Curso_Aprobado set ? WHERE idcursoAprobado =?',[req.body,id]);
            yield database_1.default.query('UPDATE Curso_Aprobado set ? WHERE idcursoAprobado =?', [req.body, id]);
            res.json({ message: 'El curso Aprobado fue actualizado...  : ' + [id] });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM Curso_Aprobado WHERE idCursoAprobado =?', [id]);
            res.json({ message: 'Deleted....  : ' + [id] });
        });
    }
}
const cursonoaprobController = new CursoNoAprobController();
exports.default = cursonoaprobController;

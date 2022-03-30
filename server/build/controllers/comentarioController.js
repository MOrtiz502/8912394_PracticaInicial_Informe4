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
class ComentarioController {
    listComentByidPublicacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idPublicacion } = req.params;
            const str_a = "select A.idComentario, A.idPublicacion, A.idUsuario, concat(U.Nombre,' ',U.Apellido) as UserNombre, ";
            const str_b = str_a + " ";
            const str_c = str_b + " A.comentario, A.fecha_creacion ";
            const str_d = str_c + "from Comentario as A ";
            const str_e = str_d + "left join Usuario as U on A.idUsuario = U.idUsuario ";
            const str_f = str_e + "where A.idPublicacion = " + idPublicacion;
            const str_g = str_f + " ";
            const str_h = str_g + " ";
            const str_i = str_h + " ";
            const sqlString = str_i + "order by A.fecha_creacion";
            console.log('query=> :', sqlString);
            yield database_1.default.query(sqlString, '', function (err, result, fields) {
                if (err)
                    throw err;
                if (result.length > 0) {
                    res.json(result);
                }
                else {
                    res.status(404).json({ text: "Comentarios por Publicación no existen!!!!" });
                }
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            console.log(req.body.idUsuario);
            const str_a = "INSERT INTO Comentario (idPublicacion,idUsuario,comentario) ";
            const str_b = str_a + "values(" + req.body.idPublicacion + "," + req.body.idUsuario;
            const strSql = str_b + ",'" + req.body.comentario + "')";
            console.log('query=> :', strSql);
            yield database_1.default.query(strSql, '');
            //await pool.query('INSERT INTO Coemntario set ?',req.body);
            res.json({ message: 'Comentario guardada......' });
        });
    }
}
const comentarioController = new ComentarioController();
exports.default = comentarioController;

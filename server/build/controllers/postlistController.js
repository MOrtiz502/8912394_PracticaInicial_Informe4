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
class PostlistController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("entró al List de postlistController.ts");
            //        const { idPerfil } = req.params;
            //        console.log("id para lista cursos aprobados:", [id] );
            const str_a = "select A.idPublicacion, A.idUsuario, concat(U.Nombre,' ',U.Apellido) as UserNombre, ";
            const str_b = str_a + " b.idCurso, b.Nombre as CursoNombre, c.idCatedratico, concat(c.Nombre,' ',c.apellido) as CatedraticoNombre, ";
            const str_c = str_b + " d.idAuxiliar, concat(d.nombre,' ',d.apellido) as AuxNombre, A.texto, A.fecha_creacion, IFNULL(e.cantidad,0) cantidad ";
            const str_d = str_c + "from Publicacion as A ";
            const str_e = str_d + "left join Usuario as U on A.idUsuario = U.idUsuario ";
            const str_f = str_e + "left join Curso as B on A.idCurso = B.idCurso ";
            const str_g = str_f + "left join Catedratico as C on A.idCatedratico = C.idCatedratico ";
            const str_h = str_g + "left join Auxiliar as D on A.idAuxiliar = D.idAuxiliar ";
            const str_i = str_h + "left join ( select idPublicacion,count(1) cantidad from Comentario group by idPublicacion ) as e ";
            const sqlString = str_i + "on (A.idPublicacion = e.idPublicacion) order by a.fecha_creacion desc ";
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
    listByIdPerfil(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idPerfil } = req.params;
            console.log("id para lista de post del perfil:" + [idPerfil]);
            const str_a = "select A.idPublicacion, A.idUsuario, concat(U.Nombre,' ',U.Apellido) as UserNombre, ";
            const str_b = str_a + " b.idCurso, b.Nombre as CursoNombre, c.idCatedratico, concat(c.Nombre,' ',c.apellido) as CatedraticoNombre, ";
            const str_c = str_b + " d.idAuxiliar, concat(d.nombre,' ',d.apellido) as AuxNombre, A.texto, A.fecha_creacion, IFNULL(e.cantidad,0) cantidad ";
            const str_d = str_c + "from Publicacion as A ";
            const str_e = str_d + "left join Usuario as U on A.idUsuario = U.idUsuario ";
            const str_f = str_e + "left join Curso as B on A.idCurso = B.idCurso ";
            const str_g = str_f + "left join Catedratico as C on A.idCatedratico = C.idCatedratico ";
            const str_h = str_g + "left join Auxiliar as D on A.idAuxiliar = D.idAuxiliar ";
            const str_i = str_h + "left join ( select idPublicacion,count(1) cantidad from Comentario group by idPublicacion ) as e ";
            const sqlString = str_i + "on (A.idPublicacion = e.idPublicacion) where A.idUsuario = " + [idPerfil] + " order by a.fecha_creacion desc ";
            console.log('query=> :' + sqlString);
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
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            console.log(req.body.idUsuario);
            const str_a = "INSERT INTO Publicacion (idUsuario,idCurso,idCatedratico,idAuxiliar,texto) ";
            const str_b = str_a + "values(" + req.body.idUsuario + "," + req.body.idCurso + "," + req.body.idCatedratico;
            const strSql = str_b + "," + req.body.idAuxiliar + ",'" + req.body.texto + "')";
            console.log("sql=> " + strSql);
            //await pool.query('INSERT INTO Publicacion set ?',req.body);
            res.json({ message: 'Publicacion guardada......' });
        });
    }
}
const postlistController = new PostlistController();
exports.default = postlistController;

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
class CursolistController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("entro al List de CursolistController.ts");
            const { id } = req.params;
            console.log("id para lista cursos aprobados:", [id]);
            const sqlString = "select A.*, B.Nombre from Curso_Aprobado A, Curso B where A.idCurso = B.IdCurso and A.idUsuario = " + id;
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
            yield database_1.default.query('INSERT INTO usuario set ?', req.body);
            res.json({ message: 'User saved......' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE Usuario set ? WHERE idUsuario =?', [req.body, id]);
            res.json({ message: 'El Idsuario fue actualizado...  : ' + [id] });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM usuario WHERE idUsuario =?', [id]);
            res.json({ message: 'Deleted....  : ' + [id] });
        });
    }
}
const cursolistController = new CursolistController();
exports.default = cursolistController;

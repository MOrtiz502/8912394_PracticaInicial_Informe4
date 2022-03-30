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
class HorarioAuxiliarController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idCurso, idCatedratico } = req.params;
            const str_a = "select A.idAuxiliar, CONCAT(A.Nombre,' ',A.Apellido) as Nombre ";
            const str_b = str_a + "from catedratico as A, Horario as B ";
            const str_c = str_b + "where A.idCatedratico = B.idCatedratico ";
            const str_d = str_c + "and   B.idCurso =? and B.idCatedratico =?";
            const strSql = str_d + " order by A.Nombre, A.Apellido";
            console.log('query: => ', strSql);
            yield database_1.default.query(strSql, [idCurso, idCatedratico], function (err, result, fields) {
                if (err)
                    throw err;
                if (result.length > 0) {
                    res.json(result);
                }
                else {
                    res.status(404).json({ text: "Catedraticos no existen!!!" });
                }
            });
        });
    }
}
const horarioauxiliarController = new HorarioAuxiliarController();
exports.default = horarioauxiliarController;

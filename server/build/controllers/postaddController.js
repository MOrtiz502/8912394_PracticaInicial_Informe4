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
class PostaddController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const str_a = "INSERT INTO Publicacion (idUsuario,idCurso,idCatedratico,idAuxiliar,texto) ";
            const str_b = str_a + "values(" + req.body.idUsuario + "," + req.body.idCurso + "," + req.body.idCatedratico;
            const strSql = str_b + "," + req.body.idAuxiliar + ",'" + req.body.texto + "')";
            console.log("sql=> " + strSql);
            yield database_1.default.query(strSql, '');
            // res.json({message: 'Publicacion guardada......'});
        });
    }
}
const postaddController = new PostaddController();
exports.default = postaddController;

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
class RegistroUserController {
    validarRegistro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { carnet, dpi } = req.params;
            const str_a = "select * from Usuario b ";
            const str_b = str_a + " ";
            const sqlString = str_b + "where (b.dpi='" + [dpi] + "' or b.carnet='" + [carnet] + "')";
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
            console.log('Grabara este registro de usuario => ');
            console.log(req.body);
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
const registrouserController = new RegistroUserController();
exports.default = registrouserController;

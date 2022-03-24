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
class LoginController {
    viewpage(req, res) {
        res.json({ message: 'View Page......' });
    }
    lc_validarUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.getConnection(function (err, connection) {
                var getUserSql = "select * from Usuario where (carnet=? or dpi = ?) and contrasenia=?";
                const { carnet, contrasenia } = req.params;
                connection.query(getUserSql, [carnet, carnet, contrasenia], function (err, result) {
                    if (err) {
                        console.log('Hay Error: ' + err.message);
                        return result;
                    }
                    if (result.length > 0) {
                        console.log('[validarUser()] -> Resolvio el query - Select ...');
                        console.log(result[0]);
                        return res.json(result[0]);
                        //   return 2;
                    }
                    //res.status(404).json({ text: "El idUsuario no existe"});
                });
            });
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /*        const usuario = await pool.query('select * from Usuario');
                    res.json({ text: 'Listing info...'});
                    if (usuario.values?.length > 0 ) {
                        console.log(usuario.values);
                    }
                    else {
                        console.log('Registro vacio...');
                    }
            */
            yield database_1.default.getConnection(function (err, connection) {
                var getUserSql = "select idUsuario,dpi,carnet,nombre,apellido,contrasenia,correo,estudiante from Usuario";
                connection.query(getUserSql, '', function (err, result) {
                    if (err) {
                        console.log('Error: ' + err.message);
                        return;
                    }
                    console.log('[list] -> Resolvio el query - Select ...');
                    res.json(result);
                });
            });
        });
    }
    getone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.getConnection(function (err, connection) {
                var getUserSql = "select * from Usuario where idUsuario=?";
                const { id } = req.params;
                connection.query(getUserSql, [id], function (err, result) {
                    if (err) {
                        console.log('Error: ' + err.message);
                        return;
                    }
                    if (result.length > 0) {
                        console.log('[getone] -> Resolvio el query - Select ...');
                        return res.json(result[0]);
                    }
                    res.status(404).json({ text: "El idUsuario no existe" });
                });
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
const loginController = new LoginController();
exports.default = loginController;

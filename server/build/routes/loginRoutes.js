"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginController_1 = __importDefault(require("../controllers/loginController"));
class LoginRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', loginController_1.default.viewpage);
        this.router.get('/:carnet/:contrasenia', loginController_1.default.lc_validarUser);
        //        this.router.get('/:id', webappController.getone);        
        //        this.router.post('/', webappController.create);
        //        this.router.put('/:id',webappController.update);   //put likes update action
        //        this.router.delete('/:id',webappController.delete);
    }
}
const loginRoutes = new LoginRoutes();
exports.default = loginRoutes.router;

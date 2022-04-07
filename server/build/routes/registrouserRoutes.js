"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registrouserController_1 = __importDefault(require("../controllers/registrouserController"));
class RegistroUserRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:carnet/:dpi', registrouserController_1.default.validarRegistro);
        this.router.post('/add', registrouserController_1.default.create);
    }
}
const registrouserRoutes = new RegistroUserRoutes();
exports.default = registrouserRoutes.router;

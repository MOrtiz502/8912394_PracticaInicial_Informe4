"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const horarioauxiliarController_1 = __importDefault(require("../controllers/horarioauxiliarController"));
class AuxiliarRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:idCurso/:idCatedratico', horarioauxiliarController_1.default.list);
    }
}
const auxiliarRoutes = new AuxiliarRoutes();
exports.default = auxiliarRoutes.router;

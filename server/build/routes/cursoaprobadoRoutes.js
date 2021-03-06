"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cursonoaprobController_1 = __importDefault(require("../controllers/cursonoaprobController"));
class CursoAprobadoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //        this.router.get('/:idUsuario', cursonoaprobController.list);  //Listado de cursos no aprobados de un Usuario
        this.router.post('/', cursonoaprobController_1.default.create);
        this.router.delete('/:id', cursonoaprobController_1.default.delete);
        this.router.put('/:id', cursonoaprobController_1.default.update);
        /*        this.router.get('/', webappController.list);
                this.router.post('/', webappController.create);
                this.router.put('/:id',webappController.update);
                this.router.delete('/:id',webappController.delete);
        */
    }
}
const cursoaprobadoRoutes = new CursoAprobadoRoutes();
exports.default = cursoaprobadoRoutes.router;

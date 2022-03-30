"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cursonoaprobController_1 = __importDefault(require("../controllers/cursonoaprobController"));
class CursoNoAprobRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:idUsuario', cursonoaprobController_1.default.list); //Listado de cursos no aprobados de un Usuario
        //      this.router.post('/',cursonoaprobController.create);
        /*        this.router.get('/', webappController.list);
                this.router.post('/', webappController.create);
                this.router.put('/:id',webappController.update);
                this.router.delete('/:id',webappController.delete);
        */
    }
}
const cursonoaprobRoutes = new CursoNoAprobRoutes();
exports.default = cursonoaprobRoutes.router;

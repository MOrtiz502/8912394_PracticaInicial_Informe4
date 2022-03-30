"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todoscursolistController_1 = __importDefault(require("../controllers/todoscursolistController"));
class TodosCursolistRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', todoscursolistController_1.default.list); //Listado de todos los cursos
        /*        this.router.get('/', webappController.list);
                this.router.post('/', webappController.create);
                this.router.put('/:id',webappController.update);
                this.router.delete('/:id',webappController.delete);
        */
    }
}
const todoscursolistRoutes = new TodosCursolistRoutes();
exports.default = todoscursolistRoutes.router;

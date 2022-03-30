"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postlistController_1 = __importDefault(require("../controllers/postlistController"));
class PostlistRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', postlistController_1.default.list);
        this.router.get('/:idPerfil', postlistController_1.default.listByIdPerfil);
        // this.router.post('/', postlistController.create);
        /*        this.router.get('/', webappController.list);
                
                this.router.put('/:id',webappController.update);
                this.router.delete('/:id',webappController.delete);
        */
    }
}
const postlistRoutes = new PostlistRoutes();
exports.default = postlistRoutes.router;

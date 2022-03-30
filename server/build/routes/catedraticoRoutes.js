"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const catedraticoController_1 = __importDefault(require("../controllers/catedraticoController"));
class CatedraticoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', catedraticoController_1.default.list);
        //        this.router.get('/:id', usersController.getone);
        //        this.router.post('/', webappController.create);
        //        this.router.put('/:id',webappController.update);   //put likes update action
        //        this.router.delete('/:id',webappController.delete);
    }
}
const catedraticoRoutes = new CatedraticoRoutes();
exports.default = catedraticoRoutes.router;

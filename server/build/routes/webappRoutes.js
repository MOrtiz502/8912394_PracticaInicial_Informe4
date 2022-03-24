"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const webappController_1 = __importDefault(require("../controllers/webappController"));
class WebappRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', webappController_1.default.list);
        this.router.get('/:id', webappController_1.default.getone);
        this.router.post('/', webappController_1.default.create);
        this.router.put('/:id', webappController_1.default.update); //put likes update action
        this.router.delete('/:id', webappController_1.default.delete);
    }
}
const webappRoutes = new WebappRoutes();
exports.default = webappRoutes.router;

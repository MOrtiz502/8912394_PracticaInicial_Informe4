"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const webapplistController_1 = __importDefault(require("../controllers/webapplistController"));
class WebapplistRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:id', webapplistController_1.default.listSinId);
        /*        this.router.get('/', webappController.list);
                this.router.post('/', webappController.create);
                this.router.put('/:id',webappController.update);
                this.router.delete('/:id',webappController.delete);
        */
    }
}
const webapplistRoutes = new WebapplistRoutes();
exports.default = webapplistRoutes.router;

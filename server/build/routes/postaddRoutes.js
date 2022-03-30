"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postaddController_1 = __importDefault(require("../controllers/postaddController"));
class PostaddRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', postaddController_1.default.create);
        /*        this.router.get('/', webappController.list);
                this.router.get('/', postlistController.list);
                this.router.put('/:id',webappController.update);
                this.router.delete('/:id',webappController.delete);
        */
    }
}
const postaddRoutes = new PostaddRoutes();
exports.default = postaddRoutes.router;

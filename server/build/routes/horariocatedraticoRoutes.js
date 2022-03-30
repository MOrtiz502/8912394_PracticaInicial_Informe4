"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const horariocatedraticoController_1 = __importDefault(require("../controllers/horariocatedraticoController"));
class CatedraticoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:id', horariocatedraticoController_1.default.list);
    }
}
const catedraticoRoutes = new CatedraticoRoutes();
exports.default = catedraticoRoutes.router;

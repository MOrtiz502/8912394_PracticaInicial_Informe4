"use strict";
//import mysql from 'promise-mysql';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const keys_1 = __importDefault(require("./keys"));
const pool = mysql_1.default.createPool(keys_1.default.database);
pool.getConnection(function (err, connection) {
    if (err) {
        console.log('Error de Conexion a la base de datos: ' + err);
        return err;
    }
    console.log('Database is connected');
});
exports.default = pool;

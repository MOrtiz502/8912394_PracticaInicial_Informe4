"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const webappRoutes_1 = __importDefault(require("./routes/webappRoutes"));
const webapplistRoutes_1 = __importDefault(require("./routes/webapplistRoutes"));
const cursolistRoutes_1 = __importDefault(require("./routes/cursolistRoutes"));
const postlistRoutes_1 = __importDefault(require("./routes/postlistRoutes"));
const loginRoutes_1 = __importDefault(require("./routes/loginRoutes"));
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
const catedraticoRoutes_1 = __importDefault(require("./routes/catedraticoRoutes"));
const todoscursolistRoutes_1 = __importDefault(require("./routes/todoscursolistRoutes"));
const horariocatedraticoRoutes_1 = __importDefault(require("./routes/horariocatedraticoRoutes"));
const horarioauxiliarRoutes_1 = __importDefault(require("./routes/horarioauxiliarRoutes"));
const postaddRoutes_1 = __importDefault(require("./routes/postaddRoutes"));
const comentarioRoutes_1 = __importDefault(require("./routes/comentarioRoutes"));
const cursonoaprobRoutes_1 = __importDefault(require("./routes/cursonoaprobRoutes"));
const cursoaprobadoRoutes_1 = __importDefault(require("./routes/cursoaprobadoRoutes"));
const registrouserRoutes_1 = __importDefault(require("./routes/registrouserRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 5000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/webapp', webappRoutes_1.default);
        this.app.use('/list', webapplistRoutes_1.default);
        this.app.use('/cursolist', cursolistRoutes_1.default);
        this.app.use('/todoscursolist', todoscursolistRoutes_1.default);
        this.app.use('/login', loginRoutes_1.default);
        this.app.use('/webapp', webappRoutes_1.default);
        this.app.use('/postlist', postlistRoutes_1.default);
        this.app.use('/postadd', postaddRoutes_1.default);
        this.app.use('/user', usersRoutes_1.default);
        this.app.use('/catedraticolist', catedraticoRoutes_1.default);
        this.app.use('/horariocatedraticolist', horariocatedraticoRoutes_1.default);
        this.app.use('/horarioauxiliarlist', horarioauxiliarRoutes_1.default);
        this.app.use('/comentario', comentarioRoutes_1.default);
        this.app.use('/cursoNoAproblist', cursonoaprobRoutes_1.default);
        this.app.use('/cursoaprobado', cursoaprobadoRoutes_1.default);
        this.app.use('/registrouser', registrouserRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();

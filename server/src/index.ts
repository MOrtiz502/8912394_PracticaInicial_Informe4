import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';


import indexRoutes from './routes/indexRoutes';
import webappRoutes from './routes/webappRoutes';
import webapplistRoutes from './routes/webapplistRoutes';
import cursolistRoutes from './routes/cursolistRoutes';
import postlistRoutes from './routes/postlistRoutes';
import loginRoutes from './routes/loginRoutes';
import usersRoutes from './routes/usersRoutes';
import catedraticoRoutes from './routes/catedraticoRoutes';
import todoscursolistRoutes from './routes/todoscursolistRoutes';
import horariocatedraticoRoutes from './routes/horariocatedraticoRoutes';
import horarioauxiliarRoutes from './routes/horarioauxiliarRoutes';
import postaddRoutes   from './routes/postaddRoutes';
import comentarioRoutes   from './routes/comentarioRoutes';
import cursonoaprobRoutes from './routes/cursonoaprobRoutes';
import cursoaprobadoRoutes from './routes/cursoaprobadoRoutes';
import registrouserRoutes  from './routes/registrouserRoutes';


class Server {
    
    public app: Application;
    
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port',process.env.PORT || 5000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/',indexRoutes);
        this.app.use('/api/webapp',webappRoutes);
        this.app.use('/list',webapplistRoutes);
        this.app.use('/cursolist',cursolistRoutes);
        this.app.use('/todoscursolist',todoscursolistRoutes);
        this.app.use('/login',loginRoutes);
        this.app.use('/webapp',webappRoutes);
        this.app.use('/postlist',postlistRoutes);
        this.app.use('/postadd',postaddRoutes);
        this.app.use('/user',usersRoutes);
        this.app.use('/catedraticolist',catedraticoRoutes);
        this.app.use('/horariocatedraticolist',horariocatedraticoRoutes);
        this.app.use('/horarioauxiliarlist',horarioauxiliarRoutes);
        this.app.use('/comentario',comentarioRoutes);
        this.app.use('/cursoNoAproblist',cursonoaprobRoutes);
        this.app.use('/cursoaprobado',cursoaprobadoRoutes);
        this.app.use('/registrouser',registrouserRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port',this.app.get('port'));
        });
    }

}


const server = new Server();
server.start();

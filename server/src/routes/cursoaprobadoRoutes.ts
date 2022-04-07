import {Router} from 'express';
import cursonoaprobController from '../controllers/cursonoaprobController'; 


class CursoAprobadoRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
//        this.router.get('/:idUsuario', cursonoaprobController.list);  //Listado de cursos no aprobados de un Usuario
        this.router.post('/',cursonoaprobController.create);
        this.router.delete('/:id',cursonoaprobController.delete);
        this.router.put('/:id',cursonoaprobController.update);
/*        this.router.get('/', webappController.list);
        this.router.post('/', webappController.create);
        this.router.put('/:id',webappController.update);   
        this.router.delete('/:id',webappController.delete);
*/        
    }
}

const cursoaprobadoRoutes = new CursoAprobadoRoutes();
export default cursoaprobadoRoutes.router;

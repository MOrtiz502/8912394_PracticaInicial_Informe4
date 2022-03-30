import {Router} from 'express';
import cursonoaprobController from '../controllers/cursonoaprobController'; 


class CursoNoAprobRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/:idUsuario', cursonoaprobController.list);  //Listado de cursos no aprobados de un Usuario
  //      this.router.post('/',cursonoaprobController.create);
/*        this.router.get('/', webappController.list);
        this.router.post('/', webappController.create);
        this.router.put('/:id',webappController.update);   
        this.router.delete('/:id',webappController.delete);
*/        
    }
}

const cursonoaprobRoutes = new CursoNoAprobRoutes();
export default cursonoaprobRoutes.router;

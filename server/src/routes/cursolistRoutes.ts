import {Router} from 'express';
import cursolistController from '../controllers/cursolistController'; 


class CursolistRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/:id', cursolistController.list);  //Listado de cursos de un Usuario
/*        this.router.get('/', webappController.list);
        this.router.post('/', webappController.create);
        this.router.put('/:id',webappController.update);   
        this.router.delete('/:id',webappController.delete);
*/        
    }
}

const cursolistRoutes = new CursolistRoutes();
export default cursolistRoutes.router;

import {Router} from 'express';
import todoscursolistController from '../controllers/todoscursolistController'; 


class TodosCursolistRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', todoscursolistController.list);  //Listado de todos los cursos
/*        this.router.get('/', webappController.list);
        this.router.post('/', webappController.create);
        this.router.put('/:id',webappController.update);   
        this.router.delete('/:id',webappController.delete);
*/        
    }
}

const todoscursolistRoutes = new TodosCursolistRoutes();
export default todoscursolistRoutes.router;

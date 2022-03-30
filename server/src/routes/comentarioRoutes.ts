import {Router} from 'express';
import comentarioController from '../controllers/comentarioController'; 


class ComentarioRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/:idPublicacion', comentarioController.listComentByidPublicacion);
        this.router.post('/',comentarioController.create);
/*        this.router.get('/', webappController.list);
        
        this.router.put('/:id',webappController.update);   
        this.router.delete('/:id',webappController.delete);
*/        
    }
}

const comentarioRoutes = new ComentarioRoutes();
export default comentarioRoutes.router;

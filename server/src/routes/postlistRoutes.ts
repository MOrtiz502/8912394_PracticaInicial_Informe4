import {Router} from 'express';
import postlistController from '../controllers/postlistController'; 


class PostlistRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', postlistController.list);
        this.router.get('/:idPerfil', postlistController.listByIdPerfil);
        // this.router.post('/', postlistController.create);
/*        this.router.get('/', webappController.list);
        
        this.router.put('/:id',webappController.update);   
        this.router.delete('/:id',webappController.delete);
*/        
    }
}

const postlistRoutes = new PostlistRoutes();
export default postlistRoutes.router;

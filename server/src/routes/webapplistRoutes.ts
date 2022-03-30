import {Router} from 'express';
import webapplistController from '../controllers/webapplistController'; 


class WebapplistRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/:id', webapplistController.listSinId);
/*        this.router.get('/', webappController.list);
        this.router.post('/', webappController.create);
        this.router.put('/:id',webappController.update);   
        this.router.delete('/:id',webappController.delete);
*/        
    }
}

const webapplistRoutes = new WebapplistRoutes();
export default webapplistRoutes.router;

import {Router} from 'express';
import webappController from '../controllers/webappController'; 


class WebappRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', webappController.list);
        this.router.get('/:id', webappController.getone);        
        this.router.post('/', webappController.create);
        this.router.put('/:id',webappController.update);   //put likes update action
        this.router.delete('/:id',webappController.delete);
    }
}

const webappRoutes = new WebappRoutes();
export default webappRoutes.router;

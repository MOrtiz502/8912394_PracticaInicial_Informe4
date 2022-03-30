import {Router} from 'express';
import catedraticoController from '../controllers/catedraticoController'; 


class CatedraticoRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
          this.router.get('/', catedraticoController.list);
//        this.router.get('/:id', usersController.getone);
//        this.router.post('/', webappController.create);
//        this.router.put('/:id',webappController.update);   //put likes update action
//        this.router.delete('/:id',webappController.delete);
    }
}

const catedraticoRoutes = new CatedraticoRoutes();
export default catedraticoRoutes.router;

import {Router} from 'express';
import horariocatedraticoController from '../controllers/horariocatedraticoController'; 


class CatedraticoRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
          this.router.get('/:id',horariocatedraticoController.list);
    }
}

const catedraticoRoutes = new CatedraticoRoutes();
export default catedraticoRoutes.router;

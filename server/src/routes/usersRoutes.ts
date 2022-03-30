import {Router} from 'express';
import usersController from '../controllers/usersController'; 


class UsersRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
//        this.router.get('/', webappController.list);
        this.router.get('/:id', usersController.getone);
//        this.router.post('/', webappController.create);
//        this.router.put('/:id',webappController.update);   //put likes update action
//        this.router.delete('/:id',webappController.delete);
    }
}

const usersRoutes = new UsersRoutes();
export default usersRoutes.router;

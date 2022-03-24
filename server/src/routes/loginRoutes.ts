import {Router} from 'express';
import loginController from '../controllers/loginController'; 


class LoginRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', loginController.viewpage);
        this.router.get('/:carnet/:contrasenia', loginController.lc_validarUser);
//        this.router.get('/:id', webappController.getone);        
//        this.router.post('/', webappController.create);
//        this.router.put('/:id',webappController.update);   //put likes update action
//        this.router.delete('/:id',webappController.delete);
    }
}

const loginRoutes = new LoginRoutes();
export default loginRoutes.router;

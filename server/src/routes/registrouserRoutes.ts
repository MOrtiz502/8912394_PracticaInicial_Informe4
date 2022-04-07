import {Router} from 'express';
import registrouserController from '../controllers/registrouserController'; 


class RegistroUserRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/:carnet/:dpi', registrouserController.validarRegistro);
        this.router.post('/add', registrouserController.create);
    }
}

const registrouserRoutes = new RegistroUserRoutes();
export default registrouserRoutes.router;

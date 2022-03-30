import {Router} from 'express';
import horarioauxiliarController from '../controllers/horarioauxiliarController';


class AuxiliarRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
          this.router.get('/:idCurso/:idCatedratico',horarioauxiliarController.list);
    }
}

const auxiliarRoutes = new AuxiliarRoutes();
export default auxiliarRoutes.router;

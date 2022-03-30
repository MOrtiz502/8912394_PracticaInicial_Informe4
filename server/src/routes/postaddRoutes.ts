import {Router} from 'express';
import postaddController from '../controllers/postaddController'; 


class PostaddRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/',postaddController.create);
/*        this.router.get('/', webappController.list);
        this.router.get('/', postlistController.list);        
        this.router.put('/:id',webappController.update);   
        this.router.delete('/:id',webappController.delete);
*/        
    }
}

const postaddRoutes = new PostaddRoutes();
export default postaddRoutes.router;

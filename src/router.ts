import { Router } from 'express';
import hw from './routes/hw';
import { paths } from './paths';

const router = Router();

router.get(paths.hello_world, hw);

export default router;

import { Router } from 'express';
import hw from './routes/hw';
import check_mongo from './routes/check_mongo';

import { paths } from './paths';

const router = Router();

router.get(paths.hello_world, hw);
router.get(paths.check_mongo, check_mongo);

export default router;

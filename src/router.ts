import { Router } from 'express';
import hw from './routes/hw';
import check_mongo from './routes/check_mongo';
import return_sesh from './routes/return_sesh';

import { paths } from './paths';

const router = Router();

router.get(paths.hello_world, hw);
router.get(paths.check_mongo, check_mongo);
router.get(paths.return_all_sessh, return_sesh);

export default router;

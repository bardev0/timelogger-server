import type { Request, Response } from 'express';
import { appinfo } from '../app_info';
import { getExternalIp } from '../../libs';

const hw = {
    appname: appinfo.app_name,
    appversion: appinfo.app_version,
    externalIp: await getExternalIp(),
};

export default (req: Request, res: Response) => {
    res.send(hw);
};

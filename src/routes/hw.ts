import type { Request, Response } from 'express';
import { appinfo } from '../app_info';
import { getExternalIp } from '../../libs';
import { getVersion } from '../../libs';

export default async (req: Request, res: Response) => {
    res.send({
        appname: appinfo.app_name,
        appversion: getVersion(),
        externalIp: await getExternalIp(),
        currrentDate: new Date(),
    });
};

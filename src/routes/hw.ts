import type { Request, Response } from 'express';
import { appinfo } from '../app_info';
import { getExternalIp } from '../../libs';

export default async (req: Request, res: Response) => {
    res.send({
        appname: appinfo.app_name,
        appversion: appinfo.app_version,
        externalIp: await getExternalIp(),
        currrentDate: new Date(),
    });
};

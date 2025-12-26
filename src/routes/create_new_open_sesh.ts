import type { Request, Response } from 'express';
import { write_new_sesh } from '../orders_mongo/write_new_open_sesh';

export default async (req: Request, res: Response) => {
    // write to mongo and return result

    // log the requst
    const dataRecived = await req.body;
    console.log(dataRecived);
    const resultMongo = await write_new_sesh(dataRecived);

    res.send({ ...resultMongo });
};
//

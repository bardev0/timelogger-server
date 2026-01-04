import type { Request, Response } from 'express';
import { move_open_to_close } from '../orders_mongo/move_open_to_close';

export default async (req: Request, res: Response) => {
    let request = await req.body;
    console.log(request);

    const result = await move_open_to_close();
    console.log(result);

    res.send(result);
};

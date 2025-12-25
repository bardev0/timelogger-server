import { return_all_sessions } from '../orders_mongo/return_all_sessions';
import type { Request, Response } from 'express';

// add a return type
// type return type
export type TRT_all_sessions = {
    result: any;
};

export default async (req: Request, res: Response) => {
    const data: TRT_all_sessions = {
        result: await return_all_sessions(),
    };
    res.send(data);
};

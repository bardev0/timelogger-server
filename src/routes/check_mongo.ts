import type { Request, Response } from 'express';
import { checkMongo } from '../mongo';

export default async (req: Request, res: Response) => {
    const data = await checkMongo();
    console.log(data);
    res.json(data);
};

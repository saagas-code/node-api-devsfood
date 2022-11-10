import { Request, Response } from 'express';
import dotenv from 'dotenv'

dotenv.config()

export const ping = async (req: Request, res: Response) => {
    return res.json('pong')
};
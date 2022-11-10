import {Request, Response} from 'express'
import { Discount } from '../models/Discount';

export const GetAll = async (req: Request, res: Response) => {
    const discounts = await Discount.findAll({})

    return res.json({discounts})
};

export const GetOne = async (req: Request, res: Response) => {
    const { code } = req.params

    const discounts = await Discount.findOne({where: {code: code}})

    return res.json({discount: discounts?.discount})
};

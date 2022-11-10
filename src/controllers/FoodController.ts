import { Request, Response } from 'express';
import JWT from 'jsonwebtoken'
import dotenv from 'dotenv'
import {User} from '../models/User'
import {validationResult, matchedData} from 'express-validator'
import { Category, CategoryInstance } from '../models/Category';
import { Op } from 'sequelize';
import { Food } from '../models/Food';
const bcrypt = require('bcrypt');
dotenv.config()

export const GetAll = async (req: Request, res: Response) => {
    let { offset = 0, limit = 6, q, idCategory,  } = req.query;
    let offsetAsNumber = Number.parseInt(offset as any)
    let limitAsNumber = Number.parseInt(limit as any)

    let filter = [] as any

    if(q) {
        filter.push({name: {[Op.like]: `%${q}%`}})
    }
    if(idCategory) {
        const category = await Category.findOne({where: {id: idCategory}})
        if(category) {
            filter.push({idCategory: category.id})
        }
        
    }

    const foodsTotal = await Food.findAll({where: filter})
    const total = foodsTotal.length

    const foodList = await Food.findAll({
        where: filter,
        offset: offsetAsNumber,
        limit: limitAsNumber
    })

    return res.json({foodList, total})
};

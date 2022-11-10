import { Request, Response } from 'express';
import JWT from 'jsonwebtoken'
import dotenv from 'dotenv'
import {User} from '../models/User'
import {validationResult, matchedData} from 'express-validator'
import { Category, CategoryInstance } from './../models/Category';
const bcrypt = require('bcrypt');
dotenv.config()

export const GetAll = async (req: Request, res: Response) => {
    const categories = await Category.findAll({})

    return res.json({categories})
};

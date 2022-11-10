import { Request, Response } from 'express';
import dotenv from 'dotenv'
import { Address } from '../models/Address';
import { User } from '../models/User';
const bcrypt = require('bcrypt');
dotenv.config()

export const GetOne = async (req: Request, res: Response) => {
    const {idUser} = req.params

    const addresses = await Address.findOne({where: {idUser: idUser}})

    return res.json({addresses})
};

export const UpdateOne = async (req: Request, res: Response) => {
    const {idUser} = req.params
    const {local, rua, numero, estado, cidade} = req.body

    const user = await User.findOne({where: {id: idUser}})
    if(!user) {
        return res.json({error: 'Usuário não encontrado'})
    }

    const findAd = await Address.findOne({where: {idUser: idUser}})
    if(!findAd) {
        const addresses = await Address.create({
            idUser,
            local,
            rua,
            numero,
            estado,
            cidade
        })
    }

    const addresses = await Address.update(req.body, {where: {idUser: idUser}})

    return res.json({result: 'Dados editados com sucesso !'})
};

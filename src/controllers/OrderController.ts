import { Request, Response } from 'express';
import dotenv from 'dotenv'
import { Order } from '../models/Order';
import { OrdersItem } from '../models/OrdersItems';
const bcrypt = require('bcrypt');
dotenv.config()

export const GetAll = async (req: Request, res: Response) => {
    let {id} = req.params

    const order = await Order.findAll({where: {idUser: id}, include: OrdersItem })

    return res.json({order})
};

export const CreateItems = async (req: Request, res: Response) => {
    let {items, total, idUser } = req.body

    const order = await Order.create({
        idUser: idUser,
        total: total,
        orderDate: new Date()
    })

    const ordId = order.id

    for(let i in items) {
        const createItems = await OrdersItem.create({
            idFood: items[i].id,
            idOrder: ordId,
            name: items[i].name,
            price: items[i].price,
            qnt: items[i].qnt
        })
    }
    

    return res.json({order})
};

export const UpdateStatus = async (req: Request, res: Response) => {
    let {id, status } = req.body

    const order = await Order.update({status: status}, {where: {id: id}})

    return res.json({result: 'Dados editados com sucesso !'})
};

export const DeleteOrder = async (req: Request, res: Response) => {
    let {id } = req.body

    const order = await Order.destroy({where: {id: id}})

    return res.json({result: 'Dados editados com sucesso !'})
};


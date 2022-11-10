import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../instances/mysql';

export interface OrderItemInstance extends Model {
    id: number
    idFood: number,
    idOrder: number,
    name: string,
    price: number,
    qnt: number
}

export const OrdersItem = sequelize.define<OrderItemInstance>('OrderItem', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    idFood: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idOrder: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    qnt: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    

}, {
    tableName: 'ordersitem',
    timestamps: false
})




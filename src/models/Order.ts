import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../instances/mysql';

export interface OrderInstance extends Model {
    id: number
    total: number,
    orderDate: Date,
    status: string
}

export const Order = sequelize.define<OrderInstance>('Order', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    idUser: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    orderDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Andamento'
    }
    

}, {
    tableName: 'orders',
    timestamps: false
})




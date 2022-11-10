import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../instances/mysql';

export interface DiscountInstance extends Model {
    id: number,
    code: string,
    discount: number,
}

export const Discount = sequelize.define<DiscountInstance>('Discount', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    discount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }

}, {
    tableName: 'discounts',
    timestamps: false
})




import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../instances/mysql';

export interface FoodInstance extends Model {
    id: number
    name: string,
    image: string,
    idCategory: number,
    ingredients: string,
    points: number,
    price: number,
}

export const Food = sequelize.define<FoodInstance>('Food', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idCategory: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ingredients: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    points: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false,
    },

}, {
    tableName: 'foods',
    timestamps: false
})




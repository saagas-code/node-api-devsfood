import { DataTypes, Model } from 'sequelize'
import { sequelize } from './../instances/mysql';

export interface UserInstance extends Model {
    id: number,
    name: string,
    email: string,
    password: string,
    token: string
}

export const User = sequelize.define<UserInstance>('User', {
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
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    token: {
        type: DataTypes.STRING,
        allowNull: true,
    },

}, {
    tableName: 'users',
    timestamps: false
})




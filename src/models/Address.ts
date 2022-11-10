import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../instances/mysql';
import { Food } from './Food';
import { Order } from './Order';
import { OrdersItem } from './OrdersItems';
import { User } from './User';

export interface UserInstance extends Model {
    id: number,
    idUser: number,
    name: string,
    rua: string,
    numero: number,
    estado: string,
    cidade: string
}

export const Address = sequelize.define<UserInstance>('Address', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    idUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    local: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: ''
    },
    rua: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: ''
    },
    numero: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: ''
    },

}, {
    tableName: 'addresses',
    timestamps: false
})


User.hasOne(Address, {
    constraints: true,
    onDelete: 'CASCADE',
    foreignKey: 'idUser'
})

Order.belongsTo(User, {
    constraints: true,
    onDelete: 'CASCADE',
    foreignKey: 'idUser'
})
Order.hasMany(OrdersItem, {
    constraints: true,
    onDelete: 'CASCADE',
    foreignKey: 'idOrder'
})

OrdersItem.belongsTo(Food, {
    constraints: true,
    onDelete: 'CASCADE',
    foreignKey: 'idFood'
})

const { DataTypes } = require('sequelize');
const sequelize = require('../DB/db');

const cours = sequelize.define('Cours', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: true },
}, {
    tableName: 'cours',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false    
})
module.exports = cours;
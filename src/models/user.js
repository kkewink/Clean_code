const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define('User', {
    nome:{
        type:DataTypes.STRING,
        allowNull: false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique: true // Email unico
    }
}, {
    timestamp:true //TimeStamps, armazena o horario q foi criado
});

module.exports = User;
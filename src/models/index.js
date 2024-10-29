const fs = require('fs');
const path = require('path');
const sequelize = require('../config/database');

const db = [];

fs.readdirSync(__dirname)
    .filter(file => file !== 'index.js') // user.fe
    .forEach(file => {
        const model = require(parth.join(__dirname, file));
        //db [ user ] = modelo User
        db[model.name] = model;
    
    });

sequelize.sync();

module.exports = { sequelize, ...db};
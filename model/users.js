const sequelize = require("../util/expense");

const DataType=require('sequelize');

const User=sequelize.define('user',{
    id:{
        type:DataType.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    name:DataType.STRING,
    email:{type:DataType.STRING,allowNull:false,unique:true},
    password:DataType.STRING,
    ispremiumuser:DataType.BOOLEAN,
    totalexpense:{type:DataType.INTEGER,defaultValue:0}

})

module.exports=User;
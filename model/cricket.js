const DataType=require('sequelize');

const sequelize=require('../util/database');

const Cricket=sequelize.define('cicket',{
    id:{
        type:DataType.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:DataType.STRING,
    age:DataType.INTEGER,
    url:DataType.STRING,
    bio:DataType.STRING,
    birthplace:DataType.STRING,
    matches:DataType.INTEGER,
    score:DataType.INTEGER,
    fifties:DataType.INTEGER,
    centuries:DataType.INTEGER,
    wicket:DataType.INTEGER,
    average:DataType.INTEGER
    
})
module.exports=Cricket;
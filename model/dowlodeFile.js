
const expense=require('../util/expense');

const DataType=require('sequelize');

const DownlodeFile=expense.define('files',{
    id:{
        type:DataType.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true    
    },
    url:{type:DataType.STRING,
        allowNull:false,
        validate:{
            isUrl:true
        }
    }
})

module.exports=DownlodeFile;
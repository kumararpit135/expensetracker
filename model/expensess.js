const DataType=require('sequelize');

const expenss=require('../util/expense');

const UserExpense=expenss.define('expensess',{
    id:{
        type:DataType.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    amount:DataType.INTEGER,
    description:DataType.STRING,
    category:DataType.STRING
})

module.exports=UserExpense;
const expense=require('../util/expense');
const DataType=require('sequelize');

const Order=expense.define('order',{
    id:{
        type:DataType.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    paymentid:DataType.STRING,
    orderid:DataType.STRING,
    status:DataType.STRING
})
module.exports=Order;
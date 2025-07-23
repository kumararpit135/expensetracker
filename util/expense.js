
const Sequelize=require('sequelize')
const exsequelize=new Sequelize('expense','root','20130008890',{ 
    dialect:'mysql',
    host:'expense.cpi8aciwypm8.ap-south-1.rds.amazonaws.com'
});
module.exports=exsequelize;

const Sequelize=require('sequelize')
const exsequelize=new Sequelize('expense','root','20130008890',{ 
    dialect:'mysql',
    host:'localhost'
});
module.exports=exsequelize;
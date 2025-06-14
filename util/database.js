/***const mysql=require('mysql2');

const pool =mysql.createPool({
    host:'localhost',
    user:'root',
    database:'bookingapp',
    password:'20130008890',

})
module.exports=pool.promise();***/

const Sequelize=require('sequelize');

const sequelize=new Sequelize('bookingapp','root','20130008890',{ 
    dialect:'mysql',
    host:'localhost'
});

module.exports=sequelize;
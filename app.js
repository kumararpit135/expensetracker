

const express = require('express');
const bodyParser = require('body-parser');
const path=require('path')
const app = express();
app.use(bodyParser.json())
const cors=require('cors');
app.use(cors())
const morgan=require('morgan')
require('dotenv').config()
const fs=require('fs')

const sequelize=require('./util/expense')
//EXpense 
const User=require('./model/users')
const UserExpense=require('./model/expensess')
const Order=require('./model/order')
const DownlodeFile=require('./model/dowlodeFile');
/***sequelize
//const sequelize=require('./util/database')
//const User=require('./model/user')
//const Cricket=require('./model/cricket')
//routes
const cricketRoute=require('./routes/cricket');
const userRoute=require('./routes/userdetails');
const { FORCE } = require('sequelize/lib/index-hints');
app.use(cricketRoute)
app.use(userRoute)
app.use('/',(req,res)=>console.log('nothing happens'))**/

const expenseRoute=require('./routes/expense')
const loginRoute=require('./routes/login');
const signupRoute=require('./routes/signup');
const premRouter=require('./routes/premium')
const accessLogStream=fs.createWriteStream(path.join(__dirname,'access.log'),{
    flags:'a'
}
);
app.use(morgan('combined',{stream:accessLogStream}))
app.use(premRouter)
app.use(expenseRoute)
app.use(loginRoute)
app.use(signupRoute)


User.hasMany(UserExpense);
UserExpense.belongsTo(User);

User.hasMany(Order)
Order.belongsTo(User)

User.hasMany(DownlodeFile);
DownlodeFile.belongsTo(User)
// app.get('/signup.html', (req, res) => {
//   res.sendFile(path.join(__dirname, 'views', 'signup.html'));
// });

// app.get('/expense.html', (req, res) => {
//   res.sendFile(path.join(__dirname, 'views', 'expense.html'));
// });
// app.get('/login.html', (req, res) => {
//   res.sendFile(path.join(__dirname, 'views', 'login.html'));
// });


sequelize.sync().then(result=>{
    console.log('hii')
    app.listen(process.env.PORT);
}).catch(err=>console.log(err))

// const baseURL = window.location.hostname === 'localhost'
//   ? 'http://localhost:8000'
//   : 'http://13.232.173.20:8000';

// axios.post(${baseURL}/signup, myObj)


const express=require('express');
const router=express.Router();
const loginControler=require('../controler/loginControler')
router.post('/login',loginControler.login);
module.exports=router


const express=require('express');

const router=express.Router();
const signupControler=require('../controler/signupcontroler')
router.post('/signup',signupControler.signup)
module.exports=router;
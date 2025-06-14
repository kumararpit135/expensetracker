const crickeControler=require('../controler/cricketControler')

const express=require('express');
const router=express.Router();
router.post('/search',crickeControler.filter)
router.get('/info',crickeControler.getInfo);
router.post('/add',crickeControler.addInfo);


module.exports=router;

const express=require('express');
const router=express.Router();
const middleware=require('../middleware/auth')
const expenseControler=require('../controler/expenseControler')


router.post('/updateTransaction',middleware.verifyToken,expenseControler.updatetransaction)
router.get('/buy',middleware.verifyToken,expenseControler.buy)



router.post('/addExpense',middleware.verifyToken,expenseControler.add);


router.get('/get',middleware.verifyToken,expenseControler.get)
router.delete('/delete/:id',middleware.verifyToken,expenseControler.delete)
module.exports=router



const express=require('express');

const router=express.Router();
const middleware=require('../middleware/auth')
const premControler=require('../controler/premiumControler')
router.delete(`/signleFile/:id`,premControler.signleFile)
router.get('/downloadedFile',middleware.verifyToken,premControler.downloadFiles);
router.get('/download',middleware.verifyToken,premControler.download)
router.get('/leaderbord',premControler.leadbord)
router.get('/checkPremium',middleware.verifyToken,premControler.premium);


module.exports=router   
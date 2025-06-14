const express=require('express')
route=express.Router()

//conroler
const userControler=require('../controler/userControler')
route.delete('/deleteUserDetails/:id',userControler.deleteUserDetails)
route.get('/userDetails',userControler.getData)
route.post('/userDetails',userControler.userData)


module.exports=route;
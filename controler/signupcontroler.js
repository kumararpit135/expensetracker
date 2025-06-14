
const User=require('../model/users');
const bcrypt=require('bcrypt')
exports.signup=async(req,res)=>{
    const{name,email,password}=req.body;
    try{
        const [check]=await User.findAll({where:{email:email}})
        if(check){
            res.status(400).json({message:'you can not ragister'})
        }else{
            const haspassword=await bcrypt.hash(password,10)
            User.create({name:name,email:email,password:haspassword,ispremiumuser:false}).then((result)=>res.status(200).json(result)).catch(err=>console.log(err))
            

        }   
        

    }catch(err){
        res.json({
            message:'somthing went wrong in the signup'}
        )}
}
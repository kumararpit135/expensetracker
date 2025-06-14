const { where } = require('sequelize');
const User=require('../model/users');
const jwt=require('jsonwebtoken')

const bcrypt=require('bcrypt')
function gentrateWebToken(id){
    console.log(process.env.KEY)
    const token=jwt.sign({userId:id},process.env.KEY)
    //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTc0OTQ0OTUxNX0.Q6-CazPKGKQqqpyB3y0sl_Uvw1K7E04mSpkIVXPlp_g
    console.log(token);
    return token;
}
exports.login=async(req ,res)=>{
    console.log(req.body)
    const {email,password}=req.body;
    try{
        const [check]=await User.findAll({where:{email:email}});
        console.log(check.password)
        if(check){
            console.log('hii')

            const checkPassword=await bcrypt.compare(password,check.password)
            //console.log(checkPassword)
            if(checkPassword){  
                console.log('hiiii')
                res.status(200).json({message:"login succesful",code:'1',token:gentrateWebToken(check.id)});
            }else{
                res.status(401).json({message:"password does not match",code:'2'})
            }
        }else{
            res.status(404).json({message:"user does not exit",code:'3'})
        }
    }catch(err){res.status(500).json(err)}
}
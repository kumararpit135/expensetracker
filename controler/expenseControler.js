
const addExpense=require('../model/expensess');
const User=require('../model/users');
const Orders=require('../model/order');
const Razorpay=require('razorpay');
const { where } = require('sequelize');
exports.add=async(req , res)=>{
    const userId=req.user.userId
    
    const{amount,description,category}=req.body
    
    try{
        const getexpense=await User.findOne({where:{id:userId}});
        const totalamount=Number(amount)+Number(getexpense.totalexpense)

        const result=await addExpense.create({amount:amount,description:description,category:category,userId:userId})
        await User.update({totalexpense:totalamount},{where:{id:userId}})
        res.status(200).json(result)
        
        
    }catch(err){
        res.json('somthing went wrong in the add expense')
    }
    

}


exports.get=async(req,res)=>{
    const userId=req.user.userId
    try{
        const result=await addExpense.findAll({where:{userId:userId}})
        res.status(200).json(result)
    }catch(err){res.status(500).json('something went wrong in the expense get')}
}


exports.delete=async(req,res)=>{
    const{id}=req.params ;
    const userId=req.user.userId;
    //console.log(req.params)
    try{
        const getexpense=await User.findOne({where:{id:userId}});
        const deleteexpense=await addExpense.findOne({where:{id:id}});
        console.log(getexpense.totalexpense,deleteexpense.amount)
        const totalamount=Number(getexpense.totalexpense)-Number(deleteexpense.amount);
        
        const result=await addExpense.destroy({where:{id:id}})
        await User.update({totalexpense:totalamount},{where:{id:userId}})
        res.status(200).json(result)
    }catch(err){
        res.json('somthing went wrong int he delte of expense')
    }
    
}



exports.buy=async(req,res)=>{
    try{
        const userId=req.user.userId
        var rzp=new Razorpay({
            key_id:process.env.RKEY,
            key_secret:process.env.RSKEY
        })
        const amount=50000;
        rzp.orders.create({amount,currency:"INR"},(err,o)=>{
            if(err){
                console.log(err)
            }
            console.log(o)
            Orders.create({orderid:o.id,status:"PENDING",userId:userId}).then(()=>{
                res.status(201).json({o,key_id:rzp.key_id})
            }).catch(err=>{
                throw new Error(err)
            })
        })
    }catch(err){console.log(err)}

} 

exports.updatetransaction=async(req , res)=>{
    console.log('in the update ')
    try{
        const userId=req.user.userId;
        const {payment_id, order_id}=req.body;
        const result=await Orders.findOne({where:{orderid:order_id}})
        console.log(result,'hii')
        if(result){

            await Orders.update({paymentid:payment_id,status:'SUCCESFUL'},{where:{orderid:order_id}});
            await User.update({ispremiumuser:true},{where:{id:userId}})
            res.status(200).json('done')
        }else{
            res.status(500).json()
        }      
       
    }catch(err){
        res.json(err)
    }
}
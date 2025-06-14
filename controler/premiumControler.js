
const User=require('../model/users');
const Expense=require('../model/expensess');
const S3service=require('../service/S3service')
const DownlodeFile=require('../model/dowlodeFile');
exports.premium=(req,res)=>{
    const userId=req.user.userId;
    User.findOne({where:{id:userId}}).then((result)=>{
        if(result.ispremiumuser){
            res.status(200).json({premium:true})
        }else{
            res.status(204).json({premium:false})
        }
    }).catch(err=>{
        res.json(err)
    })

}
exports.leadbord=(req,res)=>{
    console.log('hiio')
    User.findAll({order:[['totalexpense','DESC']],attributes:['name','totalexpense']}).then((result)=>{
        console.log(result)
        res.json(result)
    }).catch((err)=>{
        res.json(err)
    })
}


exports.download=async(req,res)=>{
    const userId=req.user.userId;
    try{
        
        const result=await Expense.findAll({where:{userId:userId}});
        const fileName=`expense${userId}/${new Date()}.txt`
        const strigifiedExpenses=JSON.stringify(result);
        const fileUrl=await S3service.uploadToS3(strigifiedExpenses,fileName)
        console.log(fileUrl)
        await DownlodeFile.create({url:fileUrl,userId:userId});
        res.status(200).json(fileUrl)
        
        
    }catch(err){
        res.status(400).json(err)
    }
}

exports.downloadFiles=async(req,res)=>{
    const userId=req.user.userId;
    try{
        const result=await DownlodeFile.findAll({where:{userId:userId}});
        res.status(200).json(result)
    }catch(er){
        res.status(500).json(err)
    }
}


exports.signleFile=async(req , res)=>{
    try{
        const {id}=req.params
        const fileUrl=await DownlodeFile.findAll({where:{id:id}})
        console.log(fileUrl)
        res.status(200).json(fileUrl)
    }catch(err){res(500).josn(err)}
}
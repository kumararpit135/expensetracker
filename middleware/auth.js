const jwt=require('jsonwebtoken')

exports.verifyToken=(req,res,next)=>{
    const token=req.headers['authorization']
    console.log("IN the middlware",token)
    if(!token){
        return res.status(400).json({message:"Token is not found "})
    }
    jwt.verify(token,process.env.KEY,(err,userID)=>{
        if(err){
            return res.status(400).json({message:"not done "})
        }
        //console.log(env,'dfkjhksdhfks')
        req.user=userID;
        next()
    })
    

}
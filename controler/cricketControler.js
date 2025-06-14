
const Cricket=require('../model/cricket');
exports.addInfo=(req,res)=>{
    console.log(req.body)
    const{name,age,url,
        bio,
        birthplace,
        matches,
        score,
        fifties,
        centuries,
        wicket,
        average}=req.body
    Cricket.create({name:name,age:age,url:url,
        bio:bio,
        birthplace:birthplace,
        matches:matches,
        score:score,
        fifties:fifties,
        centuries:centuries,
        wicket:wicket,
        average:average

    }).then((result)=>{
        res.json(result)
    }).catch(err=>console.log(err))

}

exports.getInfo=(req,res)=>{
    console.log('in getINfo')
    Cricket.findAll().then((result)=>res.json(result)).catch(err=>console.log(err))
}

exports.filter=(req,res)=>{
    const{filter}=req.body
    Cricket.findAll({where:{name:filter}}).then((result)=>{res.json(result)}).catch(err=>console.log(err))
}
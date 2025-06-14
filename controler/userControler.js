
const db=require('../util/database');
const User=require('../model/user')

exports.userData=(req,res)=>{
    //console.log(req.body)
    const {username,email,number}=req.body;
   // console.log(username,email)
    
    User.create({
        name:username,
        email:email,
        phone:number
    }).then((result)=>{
        res.json('done')
    }).catch((err)=>res.json(err))
/***    db.execute('INSERT INTO user(name,email,phone)VALUES(?,?,?)',[username,email,number])
        .then((result)=>{
            
            res.json('DONE THE ADDING PART ')
        })
        .catch(err=>console.log(err))***/
    
}   
exports.getData=(req,res)=>{
    User.findAll().then(result=>{
        res.json(result)
    }).catch(err=>res.json(err))
    /***db.execute("SELECT * FROM user").then(result=>{
        //console.log(result[0])
        res.json(result)
    }).catch(err=>{
        console.log(err)
    })***/
}
exports.deleteUserDetails=(req,res)=>{
    const {id}=req.params
    User.destroy({where:{id:id}}).then(()=>{
        res.json("delete done")
    }).catch(err=>console.log(err))
    /***db.execute('DELETE FROM user WHERE id=?',[id]).then((result)=>{
        res.json('Delete the user')
    })***/
}
const AWS=require('aws-sdk');
exports.uploadToS3=(data , fileName)=>{
    
    let s3bucket=new AWS.S3({
        accessKeyId:process.env.KEY_ID,
        secretAccessKey:process.env.KEY_SECRET_ID
        //BUCKET_NAME:'arpit-expensetracker'

    })

    return new Promise((res,rej)=>{
        var params={
        Bucket:'arpit-expensetracker',
        Key:fileName,
        Body:data,
        ACL:'public-read'
        }
        s3bucket.upload(params,(err,s3response)=>{
            if(err){
                console.log('somthing went wrong ',err);
                rej(err)
            }else{console.log(s3response)
                res(s3response.Location)
            }
        })
    })
    

}
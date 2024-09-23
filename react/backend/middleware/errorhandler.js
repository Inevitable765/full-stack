const errorHandler=(err,req,res)=>{
    let statuscode=500;
    let errMessage=err.message
    console.log('gobal handler runs')
    if(err.name==='validator'){
        console.log('error',err.errors)
        const message=object.values(err.errors).map(val=>val.message)
            
        statuscode=400
        errMessage=message
    }else{
        console.log(err)
    }
    
    res.status(statuscode).json({
        

    })

}

module.exports=errorHandler


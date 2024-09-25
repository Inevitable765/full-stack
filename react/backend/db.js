const mongoose=require
("mongoose")
const colors=require("colors")

const dbconnect=async ()=>{
    try{
        const connection =await mongoose.connect('mongodb://localhost:27017/Ecommerce');
        console.log(colors.blue('connection successfull'))
    }
    catch(error){
        console.log(colors.red(error))
    }

};

module.exports = dbconnect;
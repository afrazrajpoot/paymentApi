const mongoose = require("mongoose")
const connection = async ()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/api")
        console.log("Connected to MongoDB")
    }catch(err){
        console.log(err.message)
    }
}
module.exports = connection
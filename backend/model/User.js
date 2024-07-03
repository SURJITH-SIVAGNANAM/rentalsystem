const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    mail:{
        type:String,
        required:[true,"This is an required option"]
    },
    password:{
        type:String,
        required:[true,"This is an required option"]
    },
    confirmPassword:{
        type:String,
        required:[true,"This is an required option"]
    },
    Image:{
        type:String,
    }
},{timestamps:true})

module.exports=mongoose.model('user',userSchema)
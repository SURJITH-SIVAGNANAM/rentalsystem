const User=require('../model/User')

const createUser=async(req,res)=>{
    const user=await User.create(req.body)
    if(user)
        {
            res.send({message:"user created suceesfull",success:true})
        }
    }

    
module.exports={createUser}
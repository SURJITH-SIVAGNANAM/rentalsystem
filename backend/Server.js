const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require('cors')
app.use(express.json())
app.use(cors())
const connect=async()=>{
  try{
    await mongoose.connect("mongodb://127.0.0.1:27017/authentication")
    console.log("connected successfully")
  }
  catch(err)
  {
    console.log("not connected")
  }
}
connect();
app.use('/api/user',require('./routes/User'))
app.use('/api/img',require('./routes/Image'))
app.listen(4000,()=>{
    console.log("server is running on port 4000")
})
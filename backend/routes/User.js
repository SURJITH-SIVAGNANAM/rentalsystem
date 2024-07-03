const express=require('express')
const router=express.Router();
const {createUser}=require('../controllers/User')
router.post('/register',createUser)
module.exports=router
const express=require('express')
const ExpressFormidable = require('express-formidable')

const router=express.Router()
const {imageUploadController} =require("../controllers/Image")




router.post("/upload-image",ExpressFormidable({maxFieldsSize:5*2024*2024}),
imageUploadController
)
module.exports=router;
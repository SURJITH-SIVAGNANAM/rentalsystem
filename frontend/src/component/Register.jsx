import React, { useState } from 'react'
import axios from 'axios'
const Register = () => {
    const [mail,setMail]=useState()
    const [password,setPassword]=useState()
    const [confirmPassword,setConfirmPassword]=useState()
    const [image,setImage]=useState({})
    const Image=image.url
 const handlesubmit=async(e)=>{
    e.preventDefault()
    try{
    const register=await axios.post('http://localhost:4000/api/user/register',{mail,password,confirmPassword,Image})
    }
    catch(err){
        console.log(err.message)
    }
 }
 const handleImage=async(e)=>{
    const file=e.target.files[0]
    let formData=new FormData()
    formData.append('image',file)
    
    try{
        const {data}=await axios.post('http://localhost:4000/api/img/upload-image',formData)
        setImage({
         url:data.url,
         public_id:data.public_id
        })
    }
    catch(err)
    {
        console.log(err)
    }
 }
  return (
    <div className='flex justify-center items-center h-screen '>
        <form className='space-y-5' onSubmit={handlesubmit}>
        <img src={image.url} className='h-32 w-32 bg-contain rounded-full mx-auto cursor-pointer'></img>
        <div className='text-center text-lg text-grey-900'>Register</div>
        <input type='file' label='Image' name='myFile' id='file-upload'  accept='.jpeg, .png, .jpg'  onChange={handleImage}/>
        <div className='space-y-2'>
            <div><label>Mail Id</label></div>
            <input type='mail' placeholder='Enter mailId' onChange={e=>setMail(e.target.value)} value={mail} className='ms-2 shadow-sm border rounded px-3 py-2 w-full sm:w-[20rem] text-gray-600 focus:outline-none focus:shadow-outline'></input>
        </div>
        <div className='space-y-2'>
            <div><label>Password</label></div>
            <input type='password' placeholder='Enter password' onChange={e=>setPassword(e.target.value)} value={password} className='ms-2 shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 sm:w-[20rem] text-gray-700 leading-tight focus:outline-none focus:shadow-outline'></input>
        </div>
        <div className='space-y-2'>
            <div><label>Confirm Password</label></div>
            <input type='password' placeholder='Confirm password' onChange={e=>setConfirmPassword(e.target.value)} value={confirmPassword} className='ms-2 shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 sm:w-[20rem] text-gray-700 leading-tight focus:outline-none focus:shadow-outline'></input>
        </div>
        <button type='submit' className='bg-blue-500 hover:shadow-xl shadow-md rounded-full w-full py-2 active:scale-90'>Register</button>
        </form>
    </div>
  )
}

export default Register
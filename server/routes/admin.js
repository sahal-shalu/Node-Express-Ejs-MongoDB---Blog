const express=require('express')
const router=express.Router()
const Post=require('../models/post')
const User=require('../models/user')

const adminLayout=('../views/layouts/admin')
 
router.get('/admin', async(req,res)=>{ 
 try{
    const locals={
        title:'Admin',
        discription:'simple Blog wiht Nodejs Express and MongoDb.'
    }
    res.render('admin/index',{locals,layout:adminLayout})
 }catch(error){
    console.log(error)
 }
})

/**
 * POST/
 * Admin-Check Login
 */

router.post('/admin',async (req,res)=>{
   try{
      const{username,passoword}=req.body;
      
      if(req.body.username === 'admin'&& req.body.passoword === 'Password'){
         res.send('you are logged in')
      }else{
         res.send('Wrong username or password')
      }

   }catch(error){
      console.log(error)
   }
})

module.exports=router;

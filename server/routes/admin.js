const express=require('express')
const router=express.Router()
const Post=require('../models/post')

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

module.exports=router;







const fs=require('fs')
const path=require('path')


const{contactHandler}=require('./../handlers/contact.handler')

const router = require('express').Router();
router.get('/contact',contactHandler);
router.get('/contact/json',(req,res)=>{
    res.status(200).json(json)
})
module.exports=router
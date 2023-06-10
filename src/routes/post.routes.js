

const express=require('express');
const router=express.Router()
const {postHandler}=require('./../handlers/post.handlers')
router.get('/',postHandler)

  module.exports=router;
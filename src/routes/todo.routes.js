

const express=require('express');
const router=express.Router()
const {todoHandler}=require('./../handlers/todo.handlers');
router.get('/',todoHandler)
  module.exports=router;






const express=require('express');
const router=express.Router();
const {songsHandler}=require('./../handlers/songs.handlers')
router.get('/',songsHandler)


module.exports=router;

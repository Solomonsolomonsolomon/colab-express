
const fs=require('fs')
const path=require('path')
let data=fs.readFileSync(path.join(__dirname,'..','..','contacts.json'),{encoding:'utf-8'})
let json=JSON.parse(data)
const router = require('express').Router();
router.get('/contact',(req,res)=>{
    let contacts=json.contacts;
    res.json(contacts)
    })
router.get('/contact/json',(req,res)=>{
    res.status(200).json(json)
})
module.exports=router
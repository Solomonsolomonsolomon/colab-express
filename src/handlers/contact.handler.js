



const fs=require('fs')
const path=require('path')
let data=fs.readFileSync(path.join(__dirname,'..','..','contacts.json'),{encoding:'utf-8'})
let json=JSON.parse(data)


module.exports.contactHandler=(req,res)=>{
    let contacts=json.contacts;
    res.json(contacts)
    }
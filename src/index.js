const express=require('express');
const path=require('path')
const port=process.env.PORT||2100
const app=express();
const handlebars=require('express-handlebars')
const {engine}=require('express-handlebars')
const fs=require('fs');
const router=express.Router();
const v1=require('./routes/apiv1')
//serving static files
app.use(express.static(path.join(__dirname,'..','public','css')))
app.engine('handlebars',engine());
app.set('view engine','handlebars');
app.set('views',path.join(__dirname,'..','views'))
//routes go here 
app.use('/',require('./routes/home'))
app.use('/auth',require('./routes/login'));
app.use(require('./routes/contacts'));
//test route
app.use('/v1',v1)
//listener function
app.listen(port,(err)=>{
  if(err){console.log(err)}
  console.log(`express App listening on port:${port}`)
})







































































































































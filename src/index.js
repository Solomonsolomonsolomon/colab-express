const express=require('express');
const path=require('path')
const port=process.env.PORT||2100
const app=express();
const handlebars=require('express-handlebars')
const {engine}=require('express-handlebars')
//const ejs=require('ejs');
//serving static files
app.use(express.static(path.join(__dirname,'..','public','css')))
app.engine('handlebars',engine());
app.set('view engine','handlebars');
//app.set('view engine','ejs')
app.set('views',path.join(__dirname,'..','views'))
//routes go here 
app.get('/',(req,res)=>{
 res.render('home',{name:"Solomon"})
})
app.get('/login',(req,res)=>{
  res.render('login')
})
//listener function
app.listen(port,(err)=>{
  if(err){console.log(err)}
  console.log(`express App listening on port:${port}`)
})


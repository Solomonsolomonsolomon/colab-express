



const {Router}=require('express');
const router=Router();
const songRoute=require('./songs.routes');
const postRoute=require('./post.routes');
const todoRoute=require('./todo.routes')

router.use('/song',songRoute)
router.use('/post',postRoute)
router.use('/todo',todoRoute)

module.exports=router;





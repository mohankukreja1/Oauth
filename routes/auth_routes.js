const route=require('express').Router()

route.get('/login',(req,res)=>{
     res.render('login');
})

route.get('/google',(req,res)=>{
    //handle with passport 
    res.send('logging with google');
})



route.get('/logout',(req,res)=>{
    //handle with passport
    res.send('logging out');
})

exports=module.exports={
    route
}
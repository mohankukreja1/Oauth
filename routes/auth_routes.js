const route=require('express').Router()
const passport=require('passport');

route.get('/login',(req,res)=>{
     res.render('login');
})

route.get('/google',passport.authenticate('google',{
    scope:['profile']
}))



route.get('/logout',(req,res)=>{
    //handle with passport
    res.send('logging out');
})

route.get('/google/redirect',passport.authenticate('google'),(req,res)=>{

})

exports=module.exports={
    route
}
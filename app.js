const express=require('express')

const app=express();
const authroute=require('./routes/auth_routes').route

app.set('view engine','hbs');


app.get('/',(req,res)=>{
    res.render('home');
})

app.use('/auth',authroute);
app.listen(2222,()=>{
     console.log('server started');
})
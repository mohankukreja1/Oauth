const express=require('express')
const passportsetup=require('./config/passport-setup');
const keys=require('./config/keys');
const passport=require('passport');
const app=express();
const authroute=require('./routes/auth_routes').route
const cookieSession=require('cookie-session');



app.set('view engine','hbs');
app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:['asdhjadhjsahd']
}))

app.use(passport.initialize());
app.use(passport.session());
app.get('/',(req,res)=>{
    res.render('home');
})

app.use('/auth',authroute);
app.listen(2222,()=>{
     console.log('server started');
})
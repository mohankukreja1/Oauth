const passport=require('passport');
const GoogleStratergy=require('passport-google-oauth20');
const keys=require('./keys')
const user=require('../db/models').models.User
passport.serializeUser((USER,done)=>{
    done(null,USER.id);
})
passport.deserializeUser((id,done)=>{
    user.findOne({
        _id:id
    }).then((u)=>{
        done(null.u);
    })
})

passport.use(
    new GoogleStratergy({
        callbackURL:'/auth/google/redirect',
        clientID:keys.google.clientID,
        clientSecret:keys.google.clientSecret
    },(accessToken,refreshtoken,profile,done)=>{
       user.findOne({
           ID:profile.id
       }).then((users)=>{
           if(users){
               console.log(users)
               done(null,users);

           }
           else{
               user.create({
                   name:profile.displayName,
                   ID:profile.id

               })
                   .then((result)=>{
                       console.log(result);
                       done(null,result.ops[result.ops.length-1]);

                   }).catch((err)=>{
                   console.log(err);
               })

           }
       })






    })
)





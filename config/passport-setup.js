const passport=require('passport');
const GoogleStratergy=require('passport-google-oauth20');
const keys=require('./keys')
const user=require('../db/models').models.User

passport.use(
    new GoogleStratergy({
        callbackURL:'/auth/google/redirect',
        clientID:keys.google.clientID,
        clientSecret:keys.google.clientSecret
    },(accessToken,refreshtoken,profile,done)=>{
        console.log(profile);
        user.create({
            name:profile.displayName,
            ID:profile.id

        })
            .then((result)=>{
                console.log(result);
            }).catch((err)=>{
                console.log(err);
        })

)





const passport=require('passport');
const GoogleStratergy=require('passport-google-oauth20');
const keys=require('./keys')

passport.use(
    new GoogleStratergy({
        callbackURL:'/auth/google/redirect',
        clientID:keys.google.clientID,
        clientSecret:keys.google.clientSecret
    },(accessToken,refreshtoken,profile,done)=>{
        console.log('profile')
    })
)





const passport=require('passport');
const GoogleStratergy=require('passport-google-oauth20');
const keys=require('./keys')

passport.use(
    new GoogleStratergy({
        clientId:keys.google.clientID,
        clientSecret:keys.google.clientSecret
    }),()=>{

    }
)





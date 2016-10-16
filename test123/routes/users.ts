import * as express from 'express';
import * as passport from 'passport';
import * as passportLocal from 'passport-local';
import * as jwt from 'jsonwebtoken';
import User from '../models/user';

let router = express.Router();

let LocalStrategy = passportLocal.Strategy;

passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.findOne(id, function(err, user){
        done(err,user);
    });
});

passport.use(new LocalStrategy(function(username1, password, done){
    User
    .findOne({username:username1.trim()})
    .then(function(user){
        if(!user){
            return done(null,false,{message:'incorrect username!'});
        }
        if(!user.validatePassword(password)){
            return done(null, false, {message:'incorrect password'})
        }
        user.password = null;
        return done(null, user);
        })
    .catch((err) =>{
        return done(err);
        });

}));


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', (req, res) =>{
    // req.checkBody('username', 'Username is required').notEmpty();
    // req.checkBody('password', 'password is not valid').notEmpty();
    // req.checkBody('email', 'Email is not valid').isEmail();
    // req.checkBody('comfirmPassword', 'password does not match').equals(req.body.password);

    //let errors = req.validationErrors();
    // if(errors){
    //     res.status(400).send(errors);
    // }else{
    //     let newUser = new User();
    //     newUser.username = req.body.username;
    //     newUser.email = req.body.email;
    //     newUser.setPassword(req.body.password);
    //
    //     res.send('hello');
    //     newUser
    //     .save()
    //     .then((user) =>{
    //         res.send(user);
    //     })
    //     .catch((err) =>{
    //         res.send(err);
    //     })
    //}

    res.send('hello')

});



export default router;

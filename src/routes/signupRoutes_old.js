const express = require("express");

//access Userdata
const Userdata = require('../models/Userdata');

//create seperate route handler for SignUp
const signupRouter = express.Router();

function router(nav){

    signupRouter.get('/',function(req,res){
        res.render('signup',
        {
            nav,
            title:'SIGNUP'
        });
    });

    signupRouter.post('/',  (req,res)=>{
        const { fname, lname, email, username, password, confirmpassword } = req.body;
        // let email =req.body.email;
        console.log(req.body);

        // Userdata.findOne({ 'user_email' : req.body.email })
        //     .then(function(err,user){
        //         err ="Email Already Exists";
        //         res.render('signup',
        //         {
        //             nav,
        //             title:'SIGNUP',
        //             'err' : err, 'fname' : fname, 'lname' : lname, 'email' : email, 'username' : username
        //         });
        //     })

        if(req.body.email){
            return new Promise((resolve,reject)=>{
                Userdata.findOne({user_email : req.body.email})
                    .exec((err,doc)=>{
                        if(err) return reject(err);
                        if(doc) //return reject(new Error('Email Exists !!'));
                        {
                            err ="Email Already Exists";
                            res.render('signup',
                            {
                                nav,
                                title:'SIGNUP',
                                'err' : err, 'fname' : fname, 'lname' : lname, 'email' : email, 'username' : username
                            });                            
                        }
                        // else {
                        //         //access query parameter values
                        //         var user_data = {
                        //             user_fname      : req.body.fname,
                        //             user_lname      : req.body.lname,
                        //             user_email      : req.body.email,
                        //             user_uname      : req.body.username,
                        //             user_password   : req.body.password   
                        //         };
                        //         var user = Userdata(user_data);
                        //         user.save();
                        //         res.redirect('/login');
                        // }
                    })
            })
        }    
            
            

        // //access query parameter values
        // var user_data = {
        //     user_fname      : req.body.fname,
        //     user_lname      : req.body.lname,
        //     user_email      : req.body.email,
        //     user_uname      : req.body.username,
        //     user_password   : req.body.password   
        // };
        // var user = Userdata(user_data);
        // user.save();
        // // res.redirect('/login');

        // try{
        //    let user =  Userdata.findOne({user_email : req.body.email});
        //    console.log(user);
        //    if(user){
        //        return res.status(400).json({msg: "User Already Exists"});
        //    }
           
        // }
        // catch(err){
        //         console.log(err.message);
        //         res.status(500).send("Error in Saving");
        // }

        // var { fname, lname, email, username, password, confirmpassword } = req.body;

        // var err;
        // if(!fname || !lname || !email || !username || !password || !confirmpassword){
        //     err ="Please fill all the inputs...";
        //     res.render('signup',
        //     { 
        //         nav,
        //         title:'SIGNUP',
        //         'err' : err
        //     });
        // }

        // if(password != confirmpassword){
        //     err = "Passwords does not match";
        //     res.render('signup',
        //     { 
        //         nav,
        //         title:'SIGNUP',
        //         'err' : err, 'fname' : fname, 'lname' : lname, 'email' : email, 'username' : username
        //     });
        // }
        


    })

    return signupRouter;
}

module.exports = router;
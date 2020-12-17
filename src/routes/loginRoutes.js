const express = require("express");

//access Userdata
const Userdata = require('../models/Userdata');

//create seperate route handler for Login
const loginRouter = express.Router();

function router(nav){

  //GET Login
  loginRouter.get('/',function(req,res){
    res.render('login',
    {
        nav,
        title:'LOGIN'
    });
  });

  //POST Login 
  loginRouter.post('/',  async (req, res) => {
      console.log(req.body);
      var err;
      const username = req.body.username;
      const password = req.body.password;
      if(username === 'admin' && password === 'admin123?')
      {
        res.redirect('/admin');
      }
      else if(username === 'admin' && password != 'admin123?')
      {
        err ="Invalid Admin Password"; 
        res.render('login',
        {
            nav,
            title:'LOGIN',
            'err' : err
        });
      }
      else{
        Userdata.findOne({ user_email : username })
        .then(function(user){  console.log(user);
          if(user === null){ //User Not Found with Username
            err = `Invalid User - SignUp for Login.` ;
            res.render('login',
            {
                nav,
                title:'LOGIN',
                'err' : err
            });
          }
          else{ // User Found with Username check if valid user with password
            if(user.user_email === username && user.user_password === password){
              // Valid User 
                      res.redirect('/loggedin');
            }
            else
            {
              err = "Invalid Username or Password";
              res.render('login',
              {
                  nav,
                  title:'LOGIN',
                  'err' : err
              });
            }

          }
        })
      }


      

  });

  return loginRouter;
}


module.exports = router;
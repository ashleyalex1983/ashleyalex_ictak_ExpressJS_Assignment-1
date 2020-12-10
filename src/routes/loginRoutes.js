const express = require("express");

//create seperate route handler for Login
const loginRouter = express.Router();

function router(nav){

  loginRouter.get('/',function(req,res){
    res.render('login',
    {
        nav,
        title:'LOGIN'
    });
  });

  loginRouter.post('/',  (req, res) => {
    res.send("HI LOGGED IN SUCCESSFULLY");
  });

  return loginRouter;
}


module.exports = router;
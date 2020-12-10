const express = require("express");

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

    return signupRouter;
}

module.exports = router;
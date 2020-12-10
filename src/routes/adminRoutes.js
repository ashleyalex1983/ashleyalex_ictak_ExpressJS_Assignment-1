const express = require("express");

//create seperate route handler for Admin
const adminRouter = express.Router();

//called function
function router(nav){
 
    adminRouter.get('/',  (req, res, next) => {
        // res.send('Admin Dashboard Page');
        res.render('admin',
        {
            nav,
            title: 'DASHBOARD -- ADMIN',
            heading: 'Welcome Admin'
        });
      });

    adminRouter.get('/add_book',  (req,res)=> {
        res.render('add_book',
        {
            nav,
            title: 'ADD NEW BOOK'
        })
    });

    adminRouter.get('/add_author', (req,res)=> {
        res.render('add_author',
        {
            nav,
            title: 'ADD NEW AUTHOR'
        })
    });

    return adminRouter;
}

module.exports = router;
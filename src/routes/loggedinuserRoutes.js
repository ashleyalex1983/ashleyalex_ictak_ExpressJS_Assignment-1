const express = require("express");

//access BookData Schema
const Bookdata = require('../models/Bookdata');
//access Authordata Schema
const Authordata = require('../models/Authordata');

const loggedinuserRouter = express.Router();

function router(nav){

    const nav_items =[
        {link:'/loggedin/books'  ,name:'Books'},
        {link:'/loggedin/authors',name:'Authors'}
    ];

    //GET Reader-Home
    loggedinuserRouter.get('',(req,res)=>{
        res.render('loggedin',
        {
            nav,
            title: 'DASHBOARD -- READER',
            heading: 'Welcome Reader'
        })
    })

    //GET ALL Books
    loggedinuserRouter.get('/books',(request,response)=>{
        Bookdata.find()
            .then(function(books){
                response.render('books',
                {
                    nav : nav_items,
                    title:'BOOKS',
                    books,
                    user_link: '/loggedin'
                });
            })
    });

    //GET ONE Book details
    loggedinuserRouter.get('/books/:bookid',(request,response)=>{
        const book_id = request.params.bookid;
        Bookdata.findOne({_id : book_id})
            .then(function(book){
                response.render('book',
                {
                    nav : nav_items,
                    title:'BOOK',
                    book,
                    user_link: '/loggedin'
                });
            })
    });

    //GET ALL Authors
    loggedinuserRouter.get('/authors',(request,response)=>{
        Authordata.find()
            .then(function(authors){
                response.render('authors',
                {
                    nav : nav_items,
                    title:'AUTHORS',
                    authors,
                    user_link: '/loggedin'
                });
            })
    });    

    //GET ONE Author details
    loggedinuserRouter.get('/authors/:authorid',(request,response)=>{
        const author_id = request.params.authorid;
        Authordata.findOne({_id : author_id})
            .then(function(author){
                response.render('author',
                {
                    nav : nav_items,
                    title:'AUTHOR',
                    author,
                    user_link: '/loggedin'
                });                
            })
    });

    return loggedinuserRouter;
}

module.exports = router;
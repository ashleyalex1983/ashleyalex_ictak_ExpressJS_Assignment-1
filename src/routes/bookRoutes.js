const express = require("express");

//access BookData Schema
const Bookdata = require('../models/Bookdata');

//create seperate route handler for Books
const booksRouter = express.Router();

//called function
function router(nav){
    // // books array
    // var books =[
    //     {
    //         title: 'Oliwer Twist',
    //         author: 'Charles Dickens',
    //         genre: 'Drama, Fiction',
    //         img: 'OliverTwist.jpg'
    //     },
    //     {
    //         title: 'Harry Potter',
    //         author: 'J K Rowling',
    //         genre: 'Fantasy',
    //         img: 'HarryPotter.jpg'
    //     },
    //     {
    //         title: 'Khasakkinte Ithihasam',
    //         author: 'O V Vijayan',
    //         genre: 'Drama',
    //         img: 'Khasakkinte.jpg'
    //     },
    //     {
    //         title: 'Pathummayude Aadu',
    //         author: 'Vaikom Muhammad Basheer',
    //         genre: 'Drama',
    //         img: 'Pathummayude.jpg'
    //     },
    //     {
    //         title: 'Oru Deshathinte Katha',
    //         author: 'S.K. Pottekkatt',
    //         genre: 'Drama',
    //         img: 'OruDeshathinteKatha.jpg'
    //     },
    //     {
    //         title: 'The 3 Mistakes Of My Life',
    //         author: 'Chetan Bhagat',
    //         genre: 'Drama, Fiction',
    //         img: '3Mistakes.jpg'
    //     },
    //     {
    //         title: 'War And Peace',
    //         author: 'Leo Tolstoy',
    //         genre: 'Historical Fiction, Drama, Romance',
    //         img: 'War&Peace.jpg'
    //     },
    //     {
    //         title: 'The God Of Small Things',
    //         author: 'Arundhati Roy',
    //         genre: 'Drama, Psychological Fiction',
    //         img: 'GodSmallThings.jpg'
    //     },
    //     {
    //         title: 'Wings Of Fire',
    //         author: 'A. P. J. Abdul Kalam',
    //         genre: 'Autobiography',
    //         img: 'WingsofFire.jpg'
    //     },
    //     {
    //         title: 'The Alchemist',
    //         author: 'Paulo Coelho',
    //         genre: 'Drama, Fantasy Fiction',
    //         img: 'TheAlchemist.jpg'
    //     }
    // ];
 
    booksRouter.get('/',(request,response)=>{
        Bookdata.find()
            .then(function(books){
                response.render('books',
                {
                    nav,
                    title:'BOOKS',
                    books
                });
            })
            
    });
 
    booksRouter.get('/:bookid',(request,response)=>{
        const book_id = request.params.bookid;
        Bookdata.findOne({_id : book_id})
            .then(function(book){
                response.render('book',
                {
                    nav,
                    title:'BOOK',
                    book
                });
            })
            
    });

    return booksRouter;

}

//export 
module.exports = router;

const express = require("express");

//access Authordata Schema
const Authordata = require('../models/Authordata');

//create seperate route handler for Authors
const authorsRouter = express.Router();

//called function()
function router(nav){
    //authors array
    // var authors =[
    //     {
    //         name: 'APJ Abdul Kalam',
    //         nationality: 'Indian',
    //         genre: 'Autobiography, Inspirational',
    //         dob: '15 October 1931',
    //         img: 'APJKalam.jpg'
    //     },
    //     {
    //         name: 'Arundhati Roy',
    //         nationality: 'Indian',
    //         genre: 'Fiction',
    //         dob: '24 November 1961',
    //         img: 'ArundhatiRoy.jpg'
    //     },
    //     {
    //         name: 'Charles Dickens',
    //         nationality: 'British',
    //         genre: 'Short Fiction, Drama',
    //         dob: '07 February 1812',
    //         img: 'CharlesDickens.jpg'
    //     },
    //     {
    //         name: 'Chetan Bhagat',
    //         nationality: 'Indian',
    //         genre: 'Romance, Realistic Fiction, Non-Fiction',
    //         dob: '22 April 1974',
    //         img: 'ChetanBhagat.jpg'
    //     },
    //     {
    //         name: 'J K Rowling',
    //         nationality: 'British',
    //         genre: 'Fantasy, Drama, Crime Fiction',
    //         dob: '31 July 1965',
    //         img: 'JKRowling.jpg'
    //     },
    //     {
    //         name: 'Leo Tolstoy',
    //         nationality: 'Russian',
    //         genre: 'Realistic Fiction, Drama, Historical Fiction',
    //         dob: '09 September 1828',
    //         img: 'LeoTolstoy.jpg'
    //     },
    //     {
    //         name: 'O V Vijayan',
    //         nationality: 'Indian',
    //         genre: 'Novel, Short Fiction, Essays',
    //         dob: '02 July 1930',
    //         img: 'OVVijayan.jpg'
    //     },
    //     {
    //         name: 'Paulo Coelho',
    //         nationality: 'Brazilian',
    //         genre: 'New Age, Pop, Drama, Romance',
    //         dob: '24 August 1947',
    //         img: 'PauloCoelho.jpg'
    //     },
    //     {
    //         name: 'S K Pottekat',
    //         nationality: 'Indian',
    //         genre: 'Drama, Travelogue, Short Fiction',
    //         dob: '14 March 1913',
    //         img: 'SKPottekat.jpg'
    //     },
    //     {
    //         name: 'Vaikom Muhammad Basheer',
    //         nationality: 'Indian',
    //         genre: 'Drama, Short Fiction, Essays, Memoirs',
    //         dob: '21 January 1908',
    //         img: 'VMBasheer.jpg'
    //     }
    // ];

    authorsRouter.get('/',(request,response)=>{
        Authordata.find()
            .then(function(authors){
                response.render('authors',
                {
                    nav,
                    title:'AUTHORS',
                    authors
                });
            })

    });

    authorsRouter.get('/:authorid',(request,response)=>{
        const author_id = request.params.authorid;
        Authordata.findOne({_id : author_id})
            .then(function(author){
                response.render('author',
                {
                    nav,
                    title:'AUTHOR',
                    author
                });                
            })

    });

    return authorsRouter;

}

//export
module.exports = router;

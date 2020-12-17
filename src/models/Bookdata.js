//Access mongoose package
const mongoose = require("mongoose");

//Connect
// mongoose.connect('mongodb://localhost:27017/ExpressJS_Library');

//Schema definition
const Schema = mongoose.Schema;

//Define structure of Bookdata collection using Schema constructor
const BookSchema = new Schema({
            book_title      : String,
            book_author     : String,
            book_genre      : String,
            // book_imageUrl   : String,
            book_image      : { data: Buffer, contentType: String }
});

//Create model Bookdata
var Bookdata = mongoose.model('lib_book',BookSchema);

//exports
module.exports = Bookdata ;



//Access mongoose package
const mongoose = require("mongoose");

//Connect
// mongoose.connect('mongodb://localhost:27017/ExpressJS_Library');

//Schema definition
const Schema = mongoose.Schema;
 
//Define structure of Userdata collection using Schema constructor
const UserSchema = new Schema({
            user_fname      : { type: String , required : true},
            user_lname      : { type: String , required : true},
            user_email      : { type: String , required : true},
            // user_uname      : { type: String , required : true},
            user_password   : { type: String , required : true},
            // user_role       : Number, //1 - Admin, 0 - Reader
            user_createdon  : { type : Date, default: Date.now }   //Signup date
});

//Create model Userdata
var Userdata = mongoose.model('lib_user',UserSchema);

//exports
module.exports = Userdata ;
const express = require("express");
const mongoose = require("mongoose");
// const db_url = 'mongodb://localhost:27017/ExpressJS_Library'
const db_url = 'mongodb+srv://userone:userone@ictak-db-files.drcez.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority'

//init express
const app = new express();

const port = process.env.PORT || 5555;

//Database connection
mongoose.connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (error)=>{
    if(!error)
    {
        console.log('Success - Database Connected.');
    }
    else{
        console.log('Error - Unable to connect Database.')
    }
});


//set the template engine
app.set('view engine','ejs');
//set the views path
app.set('views','./src/views');

//Embedding static files (images,css,js)
app.use(express.static('./public'));

//accessing POST requests
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

//login route
const login_nav =[
                  {link:'/signup',name:'New User ?'}
                 ];
const loginRouter = require('./src/routes/loginRoutes')(login_nav);

//signup route
const signup_nav =[
                    {link:'/login',name:'Existing User ?'}
                  ];
const signupRouter = require('./src/routes/signupRoutes')(signup_nav);

//admin and loggedinuser route
const admin_nav =[
    {link:'/admin'        ,name:'Admin-Home'},
    {link:'/admin/books'  ,name:'Books'},
    {link:'/admin/authors',name:'Authors'}
];
const adminRouter = require('./src/routes/adminRoutes')(admin_nav);

const loggedinuser_nav =[
    {link:'/loggedin'        ,name:'Reader-Home'},
    {link:'/loggedin/books'  ,name:'Books'},
    {link:'/loggedin/authors',name:'Authors'}
];
const loggedinuserRouter = require('./src/routes/loggedinuserRoutes')(loggedinuser_nav);

// //book route
// const book_navbar = [
//     {link:'/books'      ,name:'Books'}
// ];
// const booksRouter = require('./src/routes/bookRoutes')(book_navbar);

// // author route
// const author_navbar = [
//     {link:'/authors'    ,name:'Authors'}
//   ];
// const authorsRouter = require('./src/routes/authorRoutes')(author_navbar);

//redirect server to respective route handlers
app.use('/login'    ,loginRouter);
app.use('/signup'   ,signupRouter);
app.use('/admin'    ,adminRouter);
app.use('/loggedin' ,loggedinuserRouter);
// app.use('/books'    ,booksRouter);
// app.use('/authors'  ,authorsRouter);

//For Homepage
const nav =[
    {link:'/login'  ,name:'Login | SignUp'}
    // ,{link:'/signup' ,name:'Signup'}    
];

var quotes =[
    {
        text: 'Art is not a handicraft, it is the transmission of feeling the artist has experienced.',
        author: 'Leo Tolstoy',
        img: 'LeoTolstoy.jpg'
    },
    {
        text: 'When you want something, all the universe conspires in helping you to achieve it.',
        author: 'Paulo Coelho',
        img: 'PauloCoelho.jpg'
    },
    {
        text: 'Have a heart that never hardens, and a temper that never tires, and a touch that never hurts.',
        author: 'Charles Dickens',
        img: 'CharlesDickens.jpg'
    },
    {
        text: 'Never stop fighting until you arrive at your destined place - that is, the unique you. Have an aim in life, continuously acquire knowledge, work hard, and have perseverance to realise the great life.',
        author: 'A. P. J. Abdul Kalam',
        img: 'APJKalam.jpg'
    },
    {
        text: 'It is our choices... that show what we truly are, far more than our abilities.',
        author: 'J. K. Rowling',
        img: 'JKRowling.jpg'
    }
];

//GET Homepage
app.get('/',function(req,res){
    res.render("index",  
    {
        nav,
        title: 'LIBRARY - HOME',
        quotes
    }); 
});


app.listen(port,(error)=>{
    if(!error)
    {
        console.log("Server Ready at "+ port);
    }
    else{
        console.log('Error Occurred');
    }
    
});
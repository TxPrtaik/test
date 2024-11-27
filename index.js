let express=require('express');
let bodyparser=require('body-parser');
let session=require('express-session');
let upload=require('express-fileupload');
let app=express();
let userroute=require('./Route/User');
app.use(bodyparser.urlencoded({extended:true}));
app.use(session({
    resave:true,
    secret:'pratik',
    saveUninitialized:true
}));
app.use(upload());
app.use(express.static('public/'));
app.use("/",userroute);
app.listen(1010);
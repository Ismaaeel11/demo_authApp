var express = require('express');
var indexRouter = require("./routes/index.js");
//Code below to config Auth0
const { auth } = require('express-openid-connect');

require('dotenv').config();  //pull variables from .env file 
//Configuration function
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASEURL,
    clientID: process.env.CLIENTID,
    issuerBaseURL: process.env.ISSUER,
  };

var app = express();
app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

//Auth0
app.use(auth(config));

app.use('/', indexRouter);

app.listen(3000, () => {
        console.log(`Express is running on port 3000`);
    });


var express = require("express");
var mongoose = require("mongoose");


mongoose.connect('mongodb://localhost/auth_demo_app', {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(err) {
    console.log('Database error: ' + err);
    } else {
    console.log('Successful database connection'); 
    }
});

var app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.render("home");
});

app.get("/secret", function(req, res){
    res.render("secret");
})

var port = process.env.PORT || 3000;
app.listen(3000, function(){
	console.log("ready on port 3000 ");
});

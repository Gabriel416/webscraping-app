var http = require("http");
var express = require("express");
var exphbs = require("express-handlebars");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var PORT = process.env.PORT || 6500;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// // Connect mongoose to our database
// mongoose.connect(db, function(error) {
//   // Log any errors connecting with mongoose
//   if (error) {
//     console.log(error);
//   }
//   // Or log a success message
//   else {
//     console.log("mongoose connection is successful");
//   }
// });

app.get("/results", function(req, res) {
    var collection = [];
    var heading = [];

    request('https://www.tumblr.com/search/cyberpunk+city', function(error, response, html) {
        if (error) {
            console.log(error);
        } else {
            var $ = cheerio.load(html);
            $(".post_media img").each(function(i, element) {
                var image = $(this).attr("src");
                collection.push(image);
                console.log(collection);
            });

             $(".post_body").each(function(i, element) {
                var title = $(this).children("p").text();
                heading.push(title);
                console.log(title);
            });
        }
        // for (var i = 0; i < collection.length; i++) {

        // }
    });

});

app.listen(PORT, function() {
    console.log("Listening on ", PORT);
});


// console.log(collection);
// for (var i = 0; i < collection.length; i++) {
//     request(collection[i]).pipe(createWriteStream('cyberpunk' + i + ".jpg"));
// }

// return collection[i].split('.').pop();

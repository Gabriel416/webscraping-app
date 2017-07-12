var http = require("http");
var express = require("express");
var exphbs = require("express-handlebars");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var images = require('./Models/main.js');

var PORT = process.env.PORT || 6500;
var app = express();

app.use('/Assets', express.static(__dirname + '/Assets'));
app.use('/font', express.static(__dirname + '/font'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var db = process.env.MONGODB_URI || "mongodb://localhost/cyberMongo";

// Connect mongoose to our database
mongoose.connect(db, function(error) {
    // Log any errors connecting with mongoose
    if (error) {
        console.log(error);
    }
    // Or log a success message
    else {
        console.log("mongoose connection is successful");
    }
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/results", function(req, res) {
    var collection = [];
    var heading = [];

    request('https://www.tumblr.com/search/cyberpunk+city', function(error, response, html) {
        if (error) {
            console.log(error);
        } else {
            var $ = cheerio.load(html);
            var promises = []
            $(".post_media img").each(function(i, element) {
                var image = $(this).attr("src");
                collection.push(image);
                console.log(collection);

                var newImage = images({
                    source: image
                });

                var savePromise = newImage.save(function(err) {
                    if (err) {
                        console.log("mongoose error: " + err);
                    }
                });
                promises.push(savePromise);
            });
            Promise.all(promises).then(function() {
                images.find({}, function(err, images) {
                    if (err) {
                        console.log("mongoose error: " + err);
                    }
                    var conclusion = images;
                    console.log(conclusion);
                    res.render("results", { images: images });
                    return;
                });
            });

            Promise.all(promises).then(function() {
                images.remove({}, function(err, images) {
                    if (err) {
                        console.log(err);
                    }
                });
            });

        }
    });
});

app.get("/results2", function(req, res) {
    var collection = [];
    var heading = [];

    request('https://www.tumblr.com/search/cyberpunk', function(error, response, html) {
        if (error) {
            console.log(error);
        } else {
            var $ = cheerio.load(html);
            var promises = []
            $(".post_media img").each(function(i, element) {
                var image = $(this).attr("src");
                collection.push(image);
                // console.log(collection);

                var newImage = images({
                    source: image
                });

                var savePromise = newImage.save(function(err) {
                    if (err) {
                        console.log("mongoose error: " + err);
                    }
                });
                promises.push(savePromise);
            });
            Promise.all(promises).then(function() {
                images.find({}, function(err, images) {
                    if (err) {
                        console.log("mongoose error: " + err);
                    }
                    var conclusion = images;
                    // console.log(conclusion);
                    res.render("results", { images: images });
                    return;
                });
            });

            Promise.all(promises).then(function() {
                images.remove({}, function(err, images) {
                    if (err) {
                        console.log(err);
                    }
                });
            });

        }
    });
});

app.get("/results3", function(req, res) {
    var collection = [];
    var heading = [];

    request('https://www.tumblr.com/search/cyber+punk+art', function(error, response, html) {
        if (error) {
            console.log(error);
        } else {
            var $ = cheerio.load(html);
            var promises = []
            $(".post_media img").each(function(i, element) {
                var image = $(this).attr("src");
                collection.push(image);
                // console.log(collection);

                var newImage = images({
                    source: image
                });

                var savePromise = newImage.save(function(err) {
                    if (err) {
                        console.log("mongoose error: " + err);
                    }
                });
                promises.push(savePromise);
            });
            Promise.all(promises).then(function() {
                images.find({}, function(err, images) {
                    if (err) {
                        console.log("mongoose error: " + err);
                    }
                    var conclusion = images;
                    // console.log(conclusion);
                    res.render("results", { images: images });
                    return;
                });
            });

            Promise.all(promises).then(function() {
                images.remove({}, function(err, images) {
                    if (err) {
                        console.log(err);
                    }
                });
            });

        }
    });
});

app.get("/results4", function(req, res) {
    var collection = [];
    var heading = [];

    request('https://cyberpunk-city.tumblr.com/', function(error, response, html) {
        if (error) {
            console.log(error);
        } else {
            var $ = cheerio.load(html);
            var promises = []
            $(".main img").each(function(i, element) {
                var image = $(this).attr("src");
                collection.push(image);
                // console.log(collection);

                var newImage = images({
                    source: image
                });

                var savePromise = newImage.save(function(err) {
                    if (err) {
                        console.log("mongoose error: " + err);
                    }
                });
                promises.push(savePromise);
            });
            Promise.all(promises).then(function() {
                images.find({}, function(err, images) {
                    if (err) {
                        console.log("mongoose error: " + err);
                    }
                    var conclusion = images;
                    // console.log(conclusion);
                    res.render("results", { images: images });
                    return;
                });
            });

            Promise.all(promises).then(function() {
                images.remove({}, function(err, images) {
                    if (err) {
                        console.log(err);
                    }
                });
            });

        }
    });
});

app.get("/results5", function(req, res) {
    var collection = [];
    var heading = [];

    request('https://xivles.tumblr.com/', function(error, response, html) {
        if (error) {
            console.log(error);
        } else {
            var $ = cheerio.load(html);
            var promises = []
            $(".posts-grid img").each(function(i, element) {
                var image = $(this).attr("src");
                collection.push(image);
                // console.log(collection);

                var newImage = images({
                    source: image
                });

                var savePromise = newImage.save(function(err) {
                    if (err) {
                        console.log("mongoose error: " + err);
                    }
                });
                promises.push(savePromise);
            });
            Promise.all(promises).then(function() {
                images.find({}, function(err, images) {
                    if (err) {
                        console.log("mongoose error: " + err);
                    }
                    var conclusion = images;
                    // console.log(conclusion);
                    res.render("results", { images: images });
                    return;
                });
            });

            Promise.all(promises).then(function() {
                images.remove({}, function(err, images) {
                    if (err) {
                        console.log(err);
                    }
                });
            });

        }
    });
});

app.listen(PORT, function() {
    console.log("Listening on ", PORT);
});

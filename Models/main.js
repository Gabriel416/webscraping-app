var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var imagesSchema = new Schema({
    source: {
    	type: String
    }
});

var images = mongoose.model('images', imagesSchema);

module.exports = images;

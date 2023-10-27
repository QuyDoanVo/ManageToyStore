var mongoose = require('mongoose');

var toySchema = mongoose.Schema(
    {
        Name: String,
        Image: String,
        Quality: String,
        Origin: String,
        Price: Number,
        Type: String
    },



);

var toyModel = mongoose.model("toys", toySchema, "toy");

module.exports = toyModel;
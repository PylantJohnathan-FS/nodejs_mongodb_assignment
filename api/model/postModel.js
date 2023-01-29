const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true,
    }, 
    model:{
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Post", postSchema);
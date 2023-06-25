const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogSchema = Schema({
    title:{
        type: String,
        require: true,
    },
    image:{
        type: String,
    },
    description:{
        type: String,
        require: true,
    }
})

const Blog = mongoose.model('Blog', BlogSchema);

module.exports =  Blog;
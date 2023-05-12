const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    text: String,
    username: String,
    
})
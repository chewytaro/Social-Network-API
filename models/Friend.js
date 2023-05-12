const mongoose = require('mongoose');

const friendSchema = new mongoose.Schema ({ 
    friend: {
        firstName: String,
        lastName: String,
        email: String, 
    }
});

const Friend = model('post', friendSchema);

module.exports = Friend; 
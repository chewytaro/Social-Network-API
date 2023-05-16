const { Schema, model } = require('mongoose');

const UserSchema = new Schema({

// Sets the the username field

  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },

// Sets the email field

  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'],
  },

// Sets the thoughts field as an array of ObjectIds referencing the Thought model

  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    },
  ],

// Sets the friends field as an array of ObjectIds referencing the User model

  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
},
{
  toJSON: {
    virtuals: true,
  },
  id: false,
});

// Creates a virtual property to get the number of friends

UserSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;
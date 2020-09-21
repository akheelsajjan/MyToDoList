'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose'),
Schema = mongoose.Schema;


//user schema
let userSchema = new Schema({
  userId: {
    type: String,
    default: '',
    index: true,
    unique: true
  },
  firstName: {
    type: String,
    default: ''
  },
  lastName: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: 'qwertyuiop'
  },
  email: {
    type: String,
    default: ''
  },
  mobileNumber: {
    type: Number,
    default: 0
  },

  gender: {
    type: String,
    default: 'M'
  },

  createdOn: {
    type: Date,
    default: ""
  },

  // profile_pic: {
  //   type: String,
  //   default: ''
  // }

})

mongoose.model('User', userSchema);
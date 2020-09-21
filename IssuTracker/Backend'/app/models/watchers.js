const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let watchers = new Schema({
   issueID: {
        type: String,
        default: '',
    },

    userID: {
        type: String,
        default: '',
    },

    watcherID: {
        type: String,
        default: '',
        unique: true
    }

});

mongoose.model('watchers', watchers);
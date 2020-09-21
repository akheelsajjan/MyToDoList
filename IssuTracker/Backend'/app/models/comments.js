const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let IssueSchema = new Schema({
    commentID: {
        type: String,
        default: '',
        index: true,
        unique: true
    },

    issueID: {
        type: String,
        default: '',
    },

    userID: {
        type: String,
        default: '',
    },

    userName: {
        type: String,
        default: '',
    },

    comment: {
        type: String,
        default: '',
    },

    generatedOn:{
        type: String,
        default: new Date()
    }

});

mongoose.model('comment', IssueSchema);
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let IssueSchema = new Schema({
    issueID: {
        type: String,
        default: '',
        index: true,
        unique: true
    },

    issueName: {
        type: String,
        default: ''
    },

    userId: {
        type: String,
        required: true,
        index: true
    },

    reporterName: {
        type: String,
        default: ''
    },

    status: {
        type: String,
        default: ''
    },

    discription: {
        type: String,
        default: 'No Discription'
    },

    generatedOn: {
        type: Date,
        default: ""
    },
    assignedTo: {
        type: String,
        default: ''
    },
    attachment: {
        type: String,
        default: ''
    },

});

mongoose.model('Issue', IssueSchema);
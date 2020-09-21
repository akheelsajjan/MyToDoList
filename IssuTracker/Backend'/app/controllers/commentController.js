const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('../libs/timeLib');
const passwordLib = require('../libs/generatePasswordLib');
const response = require('../libs/responseLib')
const logger = require('../libs/loggerLib');
const validateInput = require('../libs/paramsValidationLib')
const check = require('../libs/checkLib')
const token = require('../libs/tokenLib')
const AuthModel = mongoose.model('Auth')

/* Models */
const CommentModel = mongoose.model('comment');


let addComment = (req, res) => {


    let validateComment = () => {
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.params.issueID)) {
                let apiResponse = response.generate(true, ' Parameter is missing', 400, null)
                reject(apiResponse)

            } else {
                resolve();
            }
        })
    }// end validate user input

    let createComment = () => {
        return new Promise((resolve, reject) => {
            let newComment = new CommentModel({
                commentID: shortid.generate(),
                issueID: req.params.issueID,
                userID: req.body.userID,
                userName: req.body.userName,
                comment: req.body.comment,
                generatedOn: time.now(),
            })
            newComment.save((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'Comment Controller: addComment', 10)
                    let apiResponse = response.generate(true, 'Failed to create add a comment', 500, null)
                    reject(apiResponse)
                } else {
                    resolve(result)
                }
            })
        })
    }

    validateComment(req, res)
        .then(createComment)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'comment added', 200, resolve)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

}// end Issue create function 


let getCommentByIssueByID = (req, res) => {
    if (check.isEmpty(req.params.issueID)) {
        logger.error("issue Id is missing", "Comment Controller: getCommentByIssueByID", 10);
        let apiResponse = response.generate(true, "issueId is missing", 500, null);
        res.send(apiResponse)
    } else {
        CommentModel.find({ issueID: req.params.issueID })
            .exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'Comment Controller : getCommentByIssueByID', 10)
                    let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                    res.send(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('No comments Found', 'issueController: getCommentByIssueByID')
                    let apiResponse = response.generate(true, 'No comments Found', 404, null)
                    res.send(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'Comments Found', 200, result)
                    res.send(apiResponse)
                }
            });
    }
}// end get single issue


module.exports = {
    addComment,
    getCommentByIssueByID
}
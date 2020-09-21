const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const passwordLib = require('./../libs/generatePasswordLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const validateInput = require('../libs/paramsValidationLib')
const check = require('../libs/checkLib')
const token = require('../libs/tokenLib')
const AuthModel = mongoose.model('Auth')

/* Models */
const IssueModel = mongoose.model('Issue');


let IssueCreate = (req, res) => {


    let validateIssue = () => {
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.body.issueName)) {
                let apiResponse = response.generate(true, ' Parameter(s) is missing', 400, null)
                reject(apiResponse)

            } else {
                console.log(req.body)
                resolve();
            }
        })
    }// end validate user input

    let createIssue = () => {
        return new Promise((resolve, reject) => {
            let newIssue = new IssueModel({
                issueID: shortid.generate(),//int
                issueName: req.body.issueName,
                userId: req.body.userId, //userId
                reporterName: req.body.reporterName,
                status: req.body.status,
                discription: req.body.discription,
                generatedOn: time.now(),
                attachment:req.body.attachment,
                assignedTo: req.body.assignedTo
            })
            newIssue.save((err, newissue) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'issueController: createIssue', 10)
                    let apiResponse = response.generate(true, 'Failed to create new Issue', 500, null)
                    reject(apiResponse)
                } else {
                    
                    resolve(newissue)
                }
            })
        })
    }

    validateIssue(req, res)
        .then(createIssue)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'Issue created', 200, 'success')
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

}// end Issue create function 


let getIssueByID = (req, res) => {
    if (check.isEmpty(req.params.issueID)) {
        logger.error("issue Id is missing", "issueController: getIssueByID", 10);
        let apiResponse = response.generate(true, "issueId is missing", 500, null);
        res.send(apiResponse)
    } else {
        IssueModel.findOne({ 'issueID': req.params.issueID })
            .exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'issueController: getIssueByID', 10)
                    let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                    res.send(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('No issue Found', 'issueController: getIssueByID')
                    let apiResponse = response.generate(true, 'No issue Found', 404, null)
                    res.send(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'issue Details Found', 200, result)
                    res.send(apiResponse)
                }
            });
    }
}// end get single issue

let getAllIssuesOfuser = (req, res) => {
    if (check.isEmpty(req.params.userId)) {
        let apiResponse = response.generate(true, 'Parameters are missing', 403, null);
        res.send(apiResponse);
    }else{
        IssueModel.find({ 'userId': req.params.userId  })
        .lean()
        .exec((err, result) => {
            console.log(result)
            if (err) {
                console.log(err)
                logger.error(err.message, 'IssueController: getAllIssuesOfuser', 10)
                let apiResponse = response.generate(true, 'Failed To Find all the issues', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Issue Found', 'issueController: getAllIssuesOfuser')
                let apiResponse = response.generate(true, 'No Issue Found for a user', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'All Issue Details for a user Found', 200, result)
                res.send(apiResponse)
            }
        })
    }
 
}// end get all Issues

let getAllIssues = (req, res) => {
        IssueModel.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            console.log(result)
            if (err) {
                console.log(err)
                logger.error(err.message, 'IssueController: getAllIssues', 10)
                let apiResponse = response.generate(true, 'Failed To Find all the issues', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Issue Found', 'issueController: getAllIssues')
                let apiResponse = response.generate(true, 'No Issue Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'All Issue Details Found', 200, result)
                res.send(apiResponse)
            }
        })
    
 
}// end get all Issues


let editIssue = (req, res) => {

    let options = req.body;
    IssueModel.update({ 'issueID': req.params.issueID }, options).exec((err, result) => {
        if (err) {
            logger.error(err.message, 'Issue Controller Controller:editIssue', 10)
            let apiResponse = response.generate(true, 'Failed To edit issue details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No issue Found', 'issue Controller Controller: editIssue')
            let apiResponse = response.generate(true, 'No User Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Issue details edited', 200, result)
            res.send(apiResponse)
        }
    });


}// end edit issue
let deleteIssue = (req, res) => {

    IssueModel.findOneAndRemove({ 'issueID': req.params.issueID }).exec((err, result) => {
        if (err) {
            logger.error(err.message, 'Issue Controller: deleteIssue', 10)
            let apiResponse = response.generate(true, 'Failed To delete user', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No issue Found', 'Issue Controller: deleteIssue')
            let apiResponse = response.generate(true, 'No issue Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Deleted the issue successfully', 200, result)
            res.send(apiResponse)
        }
    });

}// end delete issue


//searc
let getIssueByQuery = (req, res) => {
        IssueModel.findOne()
            .exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'issueController: getIssueByID', 10)
                    let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                    res.send(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('No issue Found', 'issueController: getIssueByID')
                    let apiResponse = response.generate(true, 'No issue Found', 404, null)
                    res.send(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'issue Details Found', 200, result)
                    res.send(apiResponse)
                }
            });
    }
// end get single issue



module.exports = {
    IssueCreate,
    getIssueByID,
    getAllIssuesOfuser,
    editIssue,
    deleteIssue,
    getAllIssues
}

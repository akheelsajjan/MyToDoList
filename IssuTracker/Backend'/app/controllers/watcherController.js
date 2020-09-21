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
const watcherModel = mongoose.model('watchers');


let addWatcher = (req, res) => {


    let validateWatcher = () => {
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.params.issueID)) {
                let apiResponse = response.generate(true, ' Parameter is missing', 400, null)
                reject(apiResponse)

            } else {
                resolve();
            }
        })
    }// end validate user input

    // let createWatcher = () => {
    //     return new Promise((resolve, reject) => {
    //         watcherModel.findOne({ userID: req.body.userID })



    //         let newWatcher = new watcherModel({
    //             issueID: req.params.issueID,
    //             userID: req.body.userID,
    //         })
    //         newWatcher.save((err, result) => {
    //             if (err) {
    //                 console.log(err)
    //                 logger.error(err.message, 'watcher Controller: addWatcher', 10)
    //                 let apiResponse = response.generate(true, 'Failed to  add watcher', 500, null)
    //                 reject(apiResponse)
    //             } else {
    //                 resolve(result)
    //             }
    //         })
    //     })
    // }

    let createWatcher = () => {
        return new Promise((resolve, reject) => {
            watcherModel.findOne({ userID: req.body.userID })
                .exec((err, retrievedUserDetails) => {
                    if (err) {
                        logger.error(err.message, 'watcherController: createwatcher', 10)
                        let apiResponse = response.generate(true, 'Failed To add watcher', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(retrievedUserDetails)) {
                        console.log(req.body)
                        let newWatcher = new watcherModel({
                            watcherID: shortid.generate(),
                            issueID: req.params.issueID,
                            userID: req.body.userID,
                        })
                        newWatcher.save((err, newUser) => {
                            if (err) {
                                console.log(err)
                                logger.error(err.message, 'watcherController: createwatcher', 10)
                                let apiResponse = response.generate(true, 'Failed to add watcher', 500, null)
                                reject(apiResponse)
                            } else {
                
                                resolve(newUser)
                            }
                        })
                    } else {
                        logger.error('Watcher Cannot Be added . Watcher Already Present', 'watcherController: createwatcher', 4)
                        let apiResponse = response.generate(true, 'Watcher Already Present', 403, null)
                        reject(apiResponse)
                    }
                })
        })
    }// end create user function

    validateWatcher(req, res)
        .then(createWatcher)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'watcher added', 200, resolve)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

}// end Issue create function 


let getWatcherByIssueByID = (req, res) => {
    if (check.isEmpty(req.params.issueID)) {
        logger.error("issue Id is missing", "watcher Controller: getWatcherByIssueByID", 10);
        let apiResponse = response.generate(true, "issueId is missing", 500, null);
        res.send(apiResponse)
    } else {
        watcherModel.find({ issueID: req.params.issueID })
            .exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'watcher Controller : getWatcherByIssueByID', 10)
                    let apiResponse = response.generate(true, 'Failed To Find watcher Details', 500, null)
                    res.send(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('No watcher Found', 'issueController: getWatcherByIssueByID')
                    let apiResponse = response.generate(true, 'No watcher Found', 404, null)
                    res.send(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'watcher Found', 200, result)
                    res.send(apiResponse)
                }
            });
    }
}// end get single issue

//implement remove watcher
let rmoveWatcher = (req, res) => {

    watcherModel.findOneAndRemove({ 'watcherID': req.params.watcherID }).exec((err, result) => {
        if (err) {
            logger.error(err.message, 'watcher Controller: deleteWatcher', 10)
            let apiResponse = response.generate(true, 'Failed To rmove from watching', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No watcher Found', 'watcher Controller: deleteWatcher')
            let apiResponse = response.generate(true, 'No watcher Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'removed the watcher successfully', 200, result)
            res.send(apiResponse)
        }
    });

}// end delete issue


module.exports = {
    addWatcher,
    getWatcherByIssueByID,
    rmoveWatcher
}
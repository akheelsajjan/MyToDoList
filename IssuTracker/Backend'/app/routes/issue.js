const express = require('express');
const router = express.Router();
const userController = require("./../../app/controllers/issueController");
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/issue`;

    app.post(`${baseUrl}/create`, auth.isAuthorized, userController.IssueCreate);

    /**
     * @apiGroup issues
     * @apiVersion  1.0.0
     * @api {post} /api/v1/issue/create api for creating a issue.
     *
     *  @apiParam {string} issueName  of the issue. (body params) (required)
     *  @apiParam {string} reporterID  of the issue. (body params) (required)
     *  @apiParam {string} reporterName  of the issue. (body params) (required)
     *  @apiParam {string} status  of the issue. (body params) (required)
     *  @apiParam {string} discription  of the issue. (body params) (required)
     *  @apiParam {string} assignedTo  of the issue. (body params) (required)
     * 
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Issue created",
            "status": 200,
            "data": {
                "__v": 0,
                "_id": "5f447ee77cae9d7088079d2f",
                "comment": [],
                "assignedTo": "self",
                "generatedOn": "2020-08-25T03:00:55.000Z",
                "discription": "N/A",
                "status": "old",
                "reporterName": "ams",
                "reporterID": "5",
                "issueName": "popp",
                "issueID": "PF5RYKNAo"
            }
        }

         * @apiErrorExample {json} Error-Response:
         *
            {
                "error": true,
                "message": "Failed to register issue",
                "status": 500,
                "data": null
            }
    */
    app.get(`${baseUrl}/:userId/allIssues`, auth.isAuthorized, userController.getAllIssuesOfuser);
    /**
     * @apiGroup issues
     * @apiVersion  1.0.0
     * @api {get} /api/v1/issue/allIssues api go get all issues.
     *
     * 
     * @apiSuccessExample {object} Success-Response:
        {
        "error": false,
        "message": "All Issue Details Found",
         "status": 200,
         "data": [
                {
                    "comment": [],
                    "assignedTo": "self",
                    "generatedOn": "2020-08-25T02:57:30.000Z",
                    "discription": "N/A",
                    "status": "old",
                    "reporterName": "ams",
                    "reporterID": "4",
                    "issueName": "poi",
                    "issueID": "tSvRqXcDA"
                }
             ]
        }

         * @apiErrorExample {json} Error-Response:
         *
            {
                "error": true,
                "message": "Failed To Find all the issues",
                "status": 500,
                "data": null
            }
    */

    app.get(`${baseUrl}/allIssues`, auth.isAuthorized, userController.getAllIssues);
    /**
     * @apiGroup issues
     * @apiVersion  1.0.0
     * @api {get} /api/v1/issue/allIssues api go get all issues.
     *
     * 
     * @apiSuccessExample {object} Success-Response:
        {
        "error": false,
        "message": "All Issue Details Found",
         "status": 200,
         "data": [
                {
                    "comment": [],
                    "assignedTo": "self",
                    "generatedOn": "2020-08-25T02:57:30.000Z",
                    "discription": "N/A",
                    "status": "old",
                    "reporterName": "ams",
                    "reporterID": "4",
                    "issueName": "poi",
                    "issueID": "tSvRqXcDA"
                },
               {
                 "comment": [],
                 "assignedTo": "self",
                 "generatedOn": "2020-08-26T02:09:16.000Z",
                 "discription": "N/A",
                 "status": "old",
                 "reporterName": "ams",
                 "reporterID": "5",
                 "issueName": "popp",
                 "issueID": "uCNPH2Ny7"
             },
             {
                 "comment": [],
                 "assignedTo": "self",
                 "generatedOn": "2020-08-26T02:09:18.000Z",
                 "discription": "N/A",
                 "status": "old",
                 "reporterName": "ams",
                 "reporterID": "5",
                 "issueName": "popp",
                 "issueID": "h0gkkUcf0"
             },
             ]
        }
 
         * @apiErrorExample {json} Error-Response:
         *
            {
                "error": true,
                "message": "Failed To Find all the issues",
                "status": 500,
                "data": null
            }
    */


    app.get(`${baseUrl}/getIssue/:issueID`, auth.isAuthorized, userController.getIssueByID);
    /**
     * @apiGroup issues
     * @apiVersion  1.0.0
     * @api {post} /api/v1/issue/getIssue/:issueID api edit a issue by id.
     *
     *  @apiParam {string} issueId Issue ID of the issue. (route params) (required)
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "issue Details Found",
            "status": 200,
            "data": {
                "_id": "5f447ee77cae9d7088079d2f",
                "__v": 0,
                "comment": [],
                "assignedTo": "self",
                "generatedOn": "2020-08-25T03:00:55.000Z",
                "discription": "N/A",
                "status": "done",
                "reporterName": "sk",
                "reporterID": "5",
                "issueName": "popp",
                "issueID": "PF5RYKNAo"
            }
        }

         * @apiErrorExample {json} Error-Response:
         *
            {
                "error": true,
                "message": "Failed To Find issue details",
                "status": 500,
                "data": null
            }
     */

    app.put(`${baseUrl}/editIssue/:issueID`, auth.isAuthorized, userController.editIssue);
    /**
     * @apiGroup issues
     * @apiVersion  1.0.0
     * @api {put} /api/v1/issue/editIssue/:issueID api edit a issue by id.
     *
     * @apiParam {string} issueId Issue ID of the issue. (route params) (required)
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Issue details edited",
            "status": 200,
            "data": {
                "n": 1,
                "nModified": 1,
                "ok": 1
            }
        }

         * @apiErrorExample {json} Error-Response:
         *
            {
                "error": true,
                "message": "Failed To edit issue details",
                "status": 500,
                "data": null
            }

            {
                "error": true,
                "message": "No issue Found",
                "status": 404,
                "data": null
            }
       */

    app.put(`${baseUrl}/deleteIssue/:issueID`, auth.isAuthorized, userController.deleteIssue);
    /**
     * @apiGroup issues
     * @apiVersion  1.0.0
     * @api {post} /api/v1/issue/deleteIssue/:issueID api for deleting a issue by id.
     *
     *  @apiParam {string} issueId Issue ID of the issue. (route params) (required)
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Deleted the issue successfully",
            "status": 200,
            "data": {
                "_id": "5f447e1a66fe186df05177b5",
                "__v": 0,
                "comment": [],
                "assignedTo": "self",
                "generatedOn": "2020-08-25T02:57:30.000Z",
                "discription": "N/A",
                "status": "old",
                "reporterName": "ams",
                "reporterID": "4",
                "issueName": "poi",
                "issueID": "tSvRqXcDA"
            }
        }

         * @apiErrorExample {json} Error-Response:
         *
            {
                "error": true,
                "message": "Failed To Delete issue details",
                "status": 500,
                "data": null
            }

         * @apiErrorExample {json} Error-Response:
         *
            {
                "error": true,
                "message": "No issue Found",
                "status": 404,
                "data": null
            }
      */


}

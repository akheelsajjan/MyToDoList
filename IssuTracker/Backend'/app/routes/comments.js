const express = require('express');
const router = express.Router();
const commentController = require("./../../app/controllers/commentController");
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/comments`;

    app.get(`${baseUrl}/getcomments/:issueID`, auth.isAuthorized, commentController.getCommentByIssueByID);
    /**
      * @apiGroup comments
      * @apiVersion  1.0.0
      * @api {post} /api/v1/comments/getcomments/:issueID api for getting comments.
      *
      *  @apiParam {string} issueID  of the issue. (body params) (required)
      * 
      * 
      * @apiSuccessExample {object} Success-Response:
         {
             "error": false,
             "message": "Issue created",
             "status": 200,
             "data": [
                 {
                     "_id": "5f462800723ee47a1cfc3695",
                     "__v": 0,
                     "generatedOn": "2020-08-26T09:14:40Z",
                     "comment": "this is a comment ",
                     "userName": "self",
                     "userID": "R_3H4eCCM",
                     "issueID": "uCNPH2Ny7",
                     "commentID": "CCJng_-f_"
                 },
                  {
                     "_id": "5f462826723ee47a1cfc3696",
                     "__v": 0,
                     "generatedOn": "2020-08-26T09:15:18Z",
                     "comment": "this is a comment 2",
                     "userName": "self",
                     "userID": "R_3H4eCCM",
                     "issueID": "uCNPH2Ny7",
                     "commentID": "H5fLhF139"
                 }
             ]
         }

         * @apiErrorExample {json} Error-Response:
         *
               {
                     "error": true,
                     "message": "No comments Found",
                     "status": 404,
                     "data": null
                 }
     */

    app.post(`${baseUrl}/addcomments/:issueID`, auth.isAuthorized, commentController.addComment);
    /**
      *@apiGroup comments
      * @apiVersion  1.0.0
      * @api {post} /api/v1/comments/addcomments/:issueID api for addinga a comment.
      *
      *  @apiParam {string} issueID  of the issue. (body params) (required)
      * 
      * 
      * @apiSuccessExample {object} Success-Response:
         {
             "error": false,
             "message": "comment added",
             "status": 200,
             "data": {
                 "__v": 0,
                 "_id": "5f462bf31e24b2757cb88334",
                 "generatedOn": "2020-08-26T09:31:31Z",
                 "comment": "this is a comment 1.3",
                 "userName": "self",
                 "userID": "R_3H4eCCM",
                 "issueID": "uCNPH2Ny7",
                 "commentID": "yTRpUCzze"
             }
         }

     * @apiErrorExample {json} Error-Response:
     *
     * {
             "error": true,
             "message": "Route not found in the application",
             "status": 404,
             "data": null
       }
                    
     */


}



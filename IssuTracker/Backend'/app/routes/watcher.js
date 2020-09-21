const express = require('express');
const router = express.Router();
const watcherController = require("./../../app/controllers/watcherController");
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/watcher`;

    app.get(`${baseUrl}/getwatchers/:issueID`,  watcherController.getWatcherByIssueByID);
       /**
         * @apiGroup watcher
         * @apiVersion  1.0.0
         * @api {post} /api/v1/watcher/getwatchers/:issueID api for getting watcher.
         *
         *  @apiParam {string} issueID  of the issue. (body params) (required)
         * 
         * 
         * @apiSuccessExample {object} Success-Response:
            {
                "error": false,
                "message": "watcher Found",
                "status": 200,
                "data": [
                    {
                        "_id": "5f6324eb74a8334ff8691056",
                        "__v": 0,
                        "watcherID": "T3xIozX6m",
                        "userID": "AkbYoQwsasFc",
                        "issueID": "l7VIvUHer"
                    }
                ]
            }

            * @apiErrorExample {json} Error-Response:
            *
                  {
                        "error": true,
                        "message": "No watcher Found",
                        "status": 404,
                        "data": null
                    }
        */

    app.post(`${baseUrl}/addWatcher/:issueID`, auth.isAuthorized, watcherController.addWatcher);
       /**
         * @apiGroup watcher
         * @apiVersion  1.0.0
         * @api {post} /api/v1/watcher/addWatcher/:issueID api for adding a watcher.
         *
         *  @apiParam {string} issueID  of the issue. (body params) (required)
         * 
         * 
         * @apiSuccessExample {object} Success-Response:
           {
                "error": false,
                "message": "watcher added",
                "status": 200,
                "data": {
                    "__v": 0,
                    "_id": "5f6324f774a8334ff8691057",
                    "watcherID": "wqH-4E5_8",
                    "userID": "asd",
                    "issueID": "l7VIvUHer"
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

       app.put(`${baseUrl}/removeWatcher/:watcherID`,auth.isAuthorized, watcherController.rmoveWatcher);
        /**
         * @apiGroup watcher
         * @apiVersion  1.0.0
         * @api {put} /api/v1/watcher/removeWatcher/:watcherID api for adding a watcher.
         *
         *  @apiParam {string} watcherID  of the issue. (body params) (required)
         * 
         * 
         * @apiSuccessExample {object} Success-Response:
            {
                "error": false,
                "message": "removed the watcher successfully",
                "status": 200,
                "data": {
                    "_id": "5f63242e5a94bd336410f0f9",
                    "__v": 0,
                    "watcherID": "9RtK-yGcg",
                    "userID": "9FlCtKqcD",
                    "issueID": "l7VIvUHer"
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



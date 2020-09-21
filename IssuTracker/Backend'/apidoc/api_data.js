define({ "api": [
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/forgotPassword",
    "title": "Forgot Password.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserId",
            "description": "<p>UserId of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"User Details Found\",\n    \"status\": 200,\n    \"data\": \"Password updatePassword successfully\"\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n\n{\n    \"error\": true,\n    \"message\": \"Failed To Find User Details\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\n\n{\n    \"error\": true,\n    \"message\": \"No User Details Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\n\n{\n    \"error\": true,\n    \"message\": \"UserId\" parameter is missing\",\n    \"status\": 400,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersForgotpassword"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "api for  Sign-In.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IlhuNnJOQ0xORyIsImlhdCI6MTU4OTU0MjUwNjE3MywiZXhwIjoxNTg5NjI4OTA2LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7ImZyaWVuZHMiOlt7ImZyaWVuZElkIjoiOFU2MnBQYXVZIiwiZnJpZW5kTmFtZSI6Ik5ldyBVc2VyIHVzZXIgU3VybmFtZSJ9XSwicmVxdWVzdHMiOltdLCJ1c2VyVmVyaWZpY2F0aW9uU3RhdHVzIjp0cnVlLCJtb2JpbGVOdW1iZXIiOiIwIiwiZW1haWwiOiJha3NhamphbjI4MkBnbWFpbC5jb20iLCJsYXN0TmFtZSI6IlNhamphbiIsImZpcnN0TmFtZSI6IkFraGVlbCIsInVzZXJJZCI6ImNxdTlaeTV1aSJ9fQ.qPkxyq7QjBWKZTwT2QmB8aJEVxW_j9yuXmIWcJBiToM\",\n        \"userDetails\": {\n            \"friends\": [\n                {\n                    \"friendId\": \"8U62pPauY\",\n                    \"friendName\": \"New User user Surname\"\n                }\n            ],\n            \"requests\": [],\n            \"userVerificationStatus\": true,\n            \"mobileNumber\": \"AU 618296731080\",\n            \"email\": \"aksajjan282@gmail.com\",\n            \"lastName\": \"Sajjan\",\n            \"firstName\": \"Akheel\",\n            \"userId\": \"cqu9Zy5ui\"\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n\n{\n    \"error\": true,\n    \"message\": \"Failed To Find User Details\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\n\n{\n    \"error\": true,\n    \"message\": \"No User Details Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/logout",
    "title": "Logout.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersLogout"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/resetPassword",
    "title": "Reset Password .",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Email",
            "description": "<p>ID  Email ID of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Mail sent Successfully\",\n    \"status\": 200,\n    \"data\": \"Password reset successful\"\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n\n{\n    \"error\": true,\n    \"message\": \"Failed To Find User Details\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\n\n{\n    \"error\": true,\n    \"message\": \"No User Details Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\n\n{\n    \"error\": true,\n    \"message\": \"UserId\" parameter is missing\",\n    \"status\": 400,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersResetpassword"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "To Signup user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "FirstName",
            "description": "<p>FirstName of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Lastname",
            "description": "<p>Lastname of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Password",
            "description": "<p>Password of MyToDo account. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "EmailID",
            "description": "<p>EmailID of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "Mobile-number",
            "description": "<p>Mobile-number of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "userVerificationStatus",
            "description": "<p>userVerificationStatus For email verification of the user.(Default : false)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"error\": false,\n    \"message\": \"User created\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\": \"String\",\n        \"firstName\": \"String\",\n        \"lastName\": \"String\",\n        \"password\": \"String\"\n        \"email\": \"String\",\n        \"mobileNumber\": \"String\",\n        \"userVerificationStatus\": false,\n        \"friends\": [],\n        \"createdOn\": \"Date\",                                    \n        \"_id\": \"5b8cqu9Zy5ui08c6660\",\n        \"__v\": 0\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed to create new User\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"User Already Present With this Email\",\n    \"status\": 403,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersSignup"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/userId/details",
    "title": "api for  User Details.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"User Details Found\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IlhuNnJOQ0xORyIsImlhdCI6MTU4OTU0MjUwNjE3MywiZXhwIjoxNTg5NjI4OTA2LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7ImZyaWVuZHMiOlt7ImZyaWVuZElkIjoiOFU2MnBQYXVZIiwiZnJpZW5kTmFtZSI6Ik5ldyBVc2VyIHVzZXIgU3VybmFtZSJ9XSwicmVxdWVzdHMiOltdLCJ1c2VyVmVyaWZpY2F0aW9uU3RhdHVzIjp0cnVlLCJtb2JpbGVOdW1iZXIiOiIwIiwiZW1haWwiOiJha3NhamphbjI4MkBnbWFpbC5jb20iLCJsYXN0TmFtZSI6IlNhamphbiIsImZpcnN0TmFtZSI6IkFraGVlbCIsInVzZXJJZCI6ImNxdTlaeTV1aSJ9fQ.qPkxyq7QjBWKZTwT2QmB8aJEVxW_j9yuXmIWcJBiToM\",\n        \"userDetails\": {\n            \"friends\": [\n                {\n                    \"friendId\": \"8U62pPauY\",\n                    \"friendName\": \"New User user Surname\"\n                }\n            ],\n            \"requests\": [],\n            \"userVerificationStatus\": true,\n            \"mobileNumber\": \"AU 618296731080\",\n            \"email\": \"aksajjan282@gmail.com\",\n            \"lastName\": \"Sajjan\",\n            \"firstName\": \"Akheel\",\n            \"userId\": \"cqu9Zy5ui\"\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersUseridDetails"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/view/all",
    "title": "api for getting All Users.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IlhuNnJOQ0xORyIsImlhdCI6MTU4OTU0MjUwNjE3MywiZXhwIjoxNTg5NjI4OTA2LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7ImZyaWVuZHMiOlt7ImZyaWVuZElkIjoiOFU2MnBQYXVZIiwiZnJpZW5kTmFtZSI6Ik5ldyBVc2VyIHVzZXIgU3VybmFtZSJ9XSwicmVxdWVzdHMiOltdLCJ1c2VyVmVyaWZpY2F0aW9uU3RhdHVzIjp0cnVlLCJtb2JpbGVOdW1iZXIiOiIwIiwiZW1haWwiOiJha3NhamphbjI4MkBnbWFpbC5jb20iLCJsYXN0TmFtZSI6IlNhamphbiIsImZpcnN0TmFtZSI6IkFraGVlbCIsInVzZXJJZCI6ImNxdTlaeTV1aSJ9fQ.qPkxyq7QjBWKZTwT2QmB8aJEVxW_j9yuXmIWcJBiToM\",\n        \"userDetails\": {\n            \"friends\": [\n                {\n                    \"friendId\": \"8U62pPauY\",\n                    \"friendName\": \"New User user Surname\"\n                }\n            ],\n            \"requests\": [],\n            \"userVerificationStatus\": true,\n            \"mobileNumber\": \"AU 618296731080\",\n            \"email\": \"aksajjan282@gmail.com\",\n            \"lastName\": \"Sajjan\",\n            \"firstName\": \"Akheel\",\n            \"userId\": \"cqu9Zy5ui\"\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersViewAll"
  },
  {
    "group": "comments",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/comments/addcomments/:issueID",
    "title": "api for addinga a comment.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueID",
            "description": "<p>of the issue. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"comment added\",\n    \"status\": 200,\n    \"data\": {\n        \"__v\": 0,\n        \"_id\": \"5f462bf31e24b2757cb88334\",\n        \"generatedOn\": \"2020-08-26T09:31:31Z\",\n        \"comment\": \"this is a comment 1.3\",\n        \"userName\": \"self\",\n        \"userID\": \"R_3H4eCCM\",\n        \"issueID\": \"uCNPH2Ny7\",\n        \"commentID\": \"yTRpUCzze\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n             \"error\": true,\n             \"message\": \"Route not found in the application\",\n             \"status\": 404,\n             \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/comments.js",
    "groupTitle": "comments",
    "name": "PostApiV1CommentsAddcommentsIssueid"
  },
  {
    "group": "comments",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/comments/getcomments/:issueID",
    "title": "api for getting comments.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueID",
            "description": "<p>of the issue. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Issue created\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5f462800723ee47a1cfc3695\",\n            \"__v\": 0,\n            \"generatedOn\": \"2020-08-26T09:14:40Z\",\n            \"comment\": \"this is a comment \",\n            \"userName\": \"self\",\n            \"userID\": \"R_3H4eCCM\",\n            \"issueID\": \"uCNPH2Ny7\",\n            \"commentID\": \"CCJng_-f_\"\n        },\n         {\n            \"_id\": \"5f462826723ee47a1cfc3696\",\n            \"__v\": 0,\n            \"generatedOn\": \"2020-08-26T09:15:18Z\",\n            \"comment\": \"this is a comment 2\",\n            \"userName\": \"self\",\n            \"userID\": \"R_3H4eCCM\",\n            \"issueID\": \"uCNPH2Ny7\",\n            \"commentID\": \"H5fLhF139\"\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n      \"error\": true,\n      \"message\": \"No comments Found\",\n      \"status\": 404,\n      \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/comments.js",
    "groupTitle": "comments",
    "name": "PostApiV1CommentsGetcommentsIssueid"
  },
  {
    "group": "issues",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/issue/allIssues",
    "title": "api go get all issues.",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"All Issue Details Found\",\n \"status\": 200,\n \"data\": [\n        {\n            \"comment\": [],\n            \"assignedTo\": \"self\",\n            \"generatedOn\": \"2020-08-25T02:57:30.000Z\",\n            \"discription\": \"N/A\",\n            \"status\": \"old\",\n            \"reporterName\": \"ams\",\n            \"reporterID\": \"4\",\n            \"issueName\": \"poi\",\n            \"issueID\": \"tSvRqXcDA\"\n        }\n     ]\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed To Find all the issues\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "issues",
    "name": "GetApiV1IssueAllissues"
  },
  {
    "group": "issues",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/issue/allIssues",
    "title": "api go get all issues.",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"All Issue Details Found\",\n \"status\": 200,\n \"data\": [\n        {\n            \"comment\": [],\n            \"assignedTo\": \"self\",\n            \"generatedOn\": \"2020-08-25T02:57:30.000Z\",\n            \"discription\": \"N/A\",\n            \"status\": \"old\",\n            \"reporterName\": \"ams\",\n            \"reporterID\": \"4\",\n            \"issueName\": \"poi\",\n            \"issueID\": \"tSvRqXcDA\"\n        },\n       {\n         \"comment\": [],\n         \"assignedTo\": \"self\",\n         \"generatedOn\": \"2020-08-26T02:09:16.000Z\",\n         \"discription\": \"N/A\",\n         \"status\": \"old\",\n         \"reporterName\": \"ams\",\n         \"reporterID\": \"5\",\n         \"issueName\": \"popp\",\n         \"issueID\": \"uCNPH2Ny7\"\n     },\n     {\n         \"comment\": [],\n         \"assignedTo\": \"self\",\n         \"generatedOn\": \"2020-08-26T02:09:18.000Z\",\n         \"discription\": \"N/A\",\n         \"status\": \"old\",\n         \"reporterName\": \"ams\",\n         \"reporterID\": \"5\",\n         \"issueName\": \"popp\",\n         \"issueID\": \"h0gkkUcf0\"\n     },\n     ]\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed To Find all the issues\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "issues",
    "name": "GetApiV1IssueAllissues"
  },
  {
    "group": "issues",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issue/create",
    "title": "api for creating a issue.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueName",
            "description": "<p>of the issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reporterID",
            "description": "<p>of the issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reporterName",
            "description": "<p>of the issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>of the issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "discription",
            "description": "<p>of the issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "assignedTo",
            "description": "<p>of the issue. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Issue created\",\n    \"status\": 200,\n    \"data\": {\n        \"__v\": 0,\n        \"_id\": \"5f447ee77cae9d7088079d2f\",\n        \"comment\": [],\n        \"assignedTo\": \"self\",\n        \"generatedOn\": \"2020-08-25T03:00:55.000Z\",\n        \"discription\": \"N/A\",\n        \"status\": \"old\",\n        \"reporterName\": \"ams\",\n        \"reporterID\": \"5\",\n        \"issueName\": \"popp\",\n        \"issueID\": \"PF5RYKNAo\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed to register issue\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "issues",
    "name": "PostApiV1IssueCreate"
  },
  {
    "group": "issues",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issue/deleteIssue/:issueID",
    "title": "api for deleting a issue by id.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>Issue ID of the issue. (route params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Deleted the issue successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"_id\": \"5f447e1a66fe186df05177b5\",\n        \"__v\": 0,\n        \"comment\": [],\n        \"assignedTo\": \"self\",\n        \"generatedOn\": \"2020-08-25T02:57:30.000Z\",\n        \"discription\": \"N/A\",\n        \"status\": \"old\",\n        \"reporterName\": \"ams\",\n        \"reporterID\": \"4\",\n        \"issueName\": \"poi\",\n        \"issueID\": \"tSvRqXcDA\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed To Delete issue details\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No issue Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "issues",
    "name": "PostApiV1IssueDeleteissueIssueid"
  },
  {
    "group": "issues",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issue/getIssue/:issueID",
    "title": "api edit a issue by id.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>Issue ID of the issue. (route params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"issue Details Found\",\n    \"status\": 200,\n    \"data\": {\n        \"_id\": \"5f447ee77cae9d7088079d2f\",\n        \"__v\": 0,\n        \"comment\": [],\n        \"assignedTo\": \"self\",\n        \"generatedOn\": \"2020-08-25T03:00:55.000Z\",\n        \"discription\": \"N/A\",\n        \"status\": \"done\",\n        \"reporterName\": \"sk\",\n        \"reporterID\": \"5\",\n        \"issueName\": \"popp\",\n        \"issueID\": \"PF5RYKNAo\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed To Find issue details\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "issues",
    "name": "PostApiV1IssueGetissueIssueid"
  },
  {
    "group": "issues",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/issue/editIssue/:issueID",
    "title": "api edit a issue by id.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>Issue ID of the issue. (route params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Issue details edited\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed To edit issue details\",\n    \"status\": 500,\n    \"data\": null\n}\n\n{\n    \"error\": true,\n    \"message\": \"No issue Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "issues",
    "name": "PutApiV1IssueEditissueIssueid"
  },
  {
    "group": "watcher",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/watcher/addWatcher/:issueID",
    "title": "api for adding a watcher.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueID",
            "description": "<p>of the issue. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"error\": false,\n     \"message\": \"watcher added\",\n     \"status\": 200,\n     \"data\": {\n         \"__v\": 0,\n         \"_id\": \"5f6324f774a8334ff8691057\",\n         \"watcherID\": \"wqH-4E5_8\",\n         \"userID\": \"asd\",\n         \"issueID\": \"l7VIvUHer\"\n     }\n }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n                \"error\": true,\n                \"message\": \"Route not found in the application\",\n                \"status\": 404,\n                \"data\": null\n          }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/watcher.js",
    "groupTitle": "watcher",
    "name": "PostApiV1WatcherAddwatcherIssueid"
  },
  {
    "group": "watcher",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/watcher/getwatchers/:issueID",
    "title": "api for getting watcher.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueID",
            "description": "<p>of the issue. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"watcher Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5f6324eb74a8334ff8691056\",\n            \"__v\": 0,\n            \"watcherID\": \"T3xIozX6m\",\n            \"userID\": \"AkbYoQwsasFc\",\n            \"issueID\": \"l7VIvUHer\"\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n      \"error\": true,\n      \"message\": \"No watcher Found\",\n      \"status\": 404,\n      \"data\": null\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/watcher.js",
    "groupTitle": "watcher",
    "name": "PostApiV1WatcherGetwatchersIssueid"
  },
  {
    "group": "watcher",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/watcher/removeWatcher/:watcherID",
    "title": "api for adding a watcher.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "watcherID",
            "description": "<p>of the issue. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"removed the watcher successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"_id\": \"5f63242e5a94bd336410f0f9\",\n        \"__v\": 0,\n        \"watcherID\": \"9RtK-yGcg\",\n        \"userID\": \"9FlCtKqcD\",\n        \"issueID\": \"l7VIvUHer\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n                \"error\": true,\n                \"message\": \"Route not found in the application\",\n                \"status\": 404,\n                \"data\": null\n          }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/watcher.js",
    "groupTitle": "watcher",
    "name": "PutApiV1WatcherRemovewatcherWatcherid"
  }
] });

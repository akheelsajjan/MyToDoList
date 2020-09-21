/**
 * modules dependencies.
 */
const socketio = require('socket.io');
const mongoose = require('mongoose');

const logger = require('./loggerLib.js');



const tokenLib = require("./tokenLib.js");

const UserModel = mongoose.model('User');

//const redisLib = require("./redisLib.js");

//----------------------------SOCKET---------------------------------------------//


let setServer = (server) => {
console.log("---------------------------------------------")
    let io = socketio.listen(server);
    let myio = io.of('')
    let allOnlineUsers = [];

    myio.on('connection', function(socket){

        //------------VERIFY USER------------//

        socket.emit("verify-user", "Please Provide AuthToken For Verification")



         //------------SET USER------------//

        socket.on("set-user", (authToken)=>{

            tokenLib.verifyClaimsWithoutSecret(authToken, (err, userdata)=>{

                if(err){

                    socket.emit('auth-error', "Please Provide Correct Details");

                }else{
                   
                    let currentUser = userdata.data;

                    socket.id=currentUser.userId;

                    let fullName = `${currentUser.firstName} ${currentUser.lastName}`

                    let key = currentUser.userId;

                    let value = fullName;       
                     
                    //---------------SET ONLINE USERS IN HASH-------------//
                    /*
                    let setUserOnline = redisLib.setANewOnlineUserInHash("onlineUsersDB2", key, value, (err, allOnlineUsers) => {

                        if (err) {

                            logger.error(err.message, "socketLib:SetANewOnlineUserInHash", 10);

                        }
                        else {

                            redisLib.getAllUsersInAHash('onlineUsersDB2', (err, result) => {
                                
                                if (err) {

                                    console.log(err);

                                }

                                else {

                                    
                                    socket.join("ROOM");

                                   
                                    socket.broadcast.emit('onlineUsersTodoList', result);
                                    
                                }
                            });

                        }
                    });

                    */
                    
                     //---------------END SET ONLINE USERS IN HASH-------------//

                   // socket.fullName = fullName;
                }
            })

        })

          //------------END OF SET USER------------//


        //--------------------DISCONNECT--------------------------//  

        socket.on("disconnect", ()=>{
           /*
            if (socket.id) {
                redisLib.deleteUserFromHash('onlineUsersDB2', socket.id);
                redisLib.getAllUsersInAHash('onlineUsersDB2', (err, result) => {
                    if (err) {
                        logger.error(err.message, "socketLib:getAllUsersInAHash", 10);
                    }
                    else {
                        socket.leave("ROOM");
                       
                        socket.broadcast.emit('onlineUsersTodoList', result);
                     

                    }
                });//end getAllUsersInAHash
            }

            */

        })

 //--------------------END OF DISCONNECT--------------------------//  


//=================================Issue==================================================//
      
        socket.on("createIssue", (data) => {
            socket.broadcast.emit('createIssue-response', data.receiverName + " created a new Issue : " + data.IssuName);
        })

        socket.on("updateIssue",(data)=>{
            socket.broadcast.emit('updateIssue-response', data.receiverName + " Updated Issue : " + data.IssuName);
        })

    
        socket.on("addComment",(data)=>{
            socket.broadcast.emit('addComment-response',data.receiverName + " commented on : "+ data.IssuName + " " + "Issue " + ' \" ' +data.comment + " \" ")
        })
                
    })

}

module.exports = {
    setServer : setServer
}
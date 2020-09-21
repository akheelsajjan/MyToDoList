import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable({
  providedIn: 'root'
})
export class SocketService {


  private url = 'http://api.techblogs.live';

// private url = 'http://localhost:3000';

  private socket;

  constructor(public http: HttpClient) {

    this.socket = io(this.url)

  }

  //----------------Authentication Section--------------------------//

  public verifyUser = () => {

    return Observable.create((observer) => {

      this.socket.on("verify-user", (socketData) => {

        observer.next(socketData)

      })
    })
  }


  public setUser = (token) => {


    this.socket.emit("set-user", token)

  }


  //----------------End Of Authentication Section--------------------------//


  public onlineUserList = () => {

    return Observable.create((observer) => {

      this.socket.on("onlineUsersTodoList", (userList) => {

        observer.next(userList);

      });

    });

  }


  //---------Not--required----//
  public getOnlineUsers = () => {

    return Observable.create((observer) => {

      this.socket.on("onlineUsers", (socketData) => {

        observer.next(socketData)

      })
    })
  }
  //---------Not--required----//



  //---------------------------Issue----------------------------------------------//

 public createIssue = (userName) => {
  this.socket.emit("createIssue",userName)
}

public createIssueResponse = ()=>{
  return Observable.create((observer)=>{
    this.socket.on("createIssue-response",(data)=>{
      observer.next(data);
      console.log(data);
    })
  })
}




public updateIssue =(userName)=>{
  console.log("update Issue")
  this.socket.emit("updateIssue",userName)
}

public updateIssueResponse = () => {
  console.log("update Issue res 1")
  return Observable.create((observer)=>{
    this.socket.on("updateIssue-response",(data)=>{
      console.log("update Issue res 2")
      observer.next(data);
    })
  })
}




public addComment =(userName)=>{
  this.socket.emit("addComment",userName)
}

public addCommentResponse = () => {
  return Observable.create((observer)=>{
    this.socket.on("addComment-response",(data)=>{
      observer.next(data);
    })
  })
}


  //---------------------------------SUBITEM------------------------------------------//




  public createSubItem = (userName) => {

    this.socket.emit("createSubItem", (userName))

  }

  public createSubItem_response = () => {

    return Observable.create((observer) => {

      this.socket.on("createSubItem-response", (data) => {

        observer.next(data);

      })
    })
  }



  public deleteSubItem = (userName) => {

    this.socket.emit("deleteSubItem", (userName))

  }

  public deleteSubItem_response = () => {

    return Observable.create((observer) => {

      this.socket.on("deleteSubItem-response", (data) => {

        observer.next(data);

      })
    })
  }



  public editSubItem = (userName) => {

    this.socket.emit("updateSubItem", (userName))

  }

  public editSubItem_response = () => {

    return Observable.create((observer) => {

      this.socket.on("updateSubItem-response", (data) => {

        observer.next(data);

      })
    })
  }




  public markDoneSubItemMulti = (userName) => {
    this.socket.emit("markDoneSubItem", userName)
  }

  public subItemMarkedDoneResponse = () => {
    return Observable.create((observer) => {
      this.socket.on("markDoneSubItem-response", (data) => {
        observer.next(data);
      })
    })
  }



  public markOpenSubItemMulti = (userName) => {
    this.socket.emit("markOpenSubItem", userName)
  }


  public subItemMarkedOpenResponse = () => {
    return Observable.create((observer) => {
      this.socket.on("markOpenSubItem-response", (data) => {
        observer.next(data);
      })
    })
  }




  public undoSubItemMulti = (userName) => {
    this.socket.emit("undoSubItem", userName)
  }

  public subItemUndoResponse = () => {
    return Observable.create((observer) => {
      this.socket.on("undoSubItem-response", (data) => {
        observer.next(data);
      })
    })
  }





  public clearUndos = (userName) => {
    this.socket.emit("clearUndos", userName)
  }

  public clearUndosResponse = () => {
    return Observable.create((observer) => {
      this.socket.on("clearUndos-response", (data) => {
        observer.next(data);
      })
    })
  }


  //----------------------------END of TodDo ----------------------------------------//


  public exitSocket = () => {

    this.socket.disconnect();

  }// end exit socket



  //-------------------------DISCONNECT------------//


  public disconnect = () => {
    return Observable.create((observer) => {

      this.socket.on('disconnect', () => {

        observer.next();
        
      });//end On method
    });//end observable

  }//end disconnect


  public disconnectedSocket = () => {

    this.socket.emit("disconnect", "");//end Socket

  }//end disconnectedSocket



}

import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { AppService } from 'src/app/app.service';
import { ToastrService } from 'ngx-toastr';
import { SocketService } from 'src/app/socket.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-issue-view',
  templateUrl: './issue-view.component.html',
  styleUrls: ['./issue-view.component.css'],
  providers: [SocketService]
})
export class IssueViewComponent implements OnInit,OnDestroy{

  @Input() issueView: any;
  @Output() watcherData = new EventEmitter<Object>();
  comment: string
  commentResponse: any
  receiverId: any;
  receiverName: any;
  allUsers: any;
  assignee: string;
  attachment: string;
  timer: any;
  AllComments: any = []
  AllComments_data: any;
  allWatchers: any = [];
  currentWatcher: string;
  watcherCount: number = 0;
  watch: boolean = false;
  subscription1$: Subscription;
  subscription2$: Subscription;
  subscription3$: Subscription;
  subscription4$: Subscription;

  constructor(private data: DataService, private appService: AppService, private toastr: ToastrService, public SocketService: SocketService,) {

    this.receiverId = Cookie.get('receiverId');

    this.receiverName = Cookie.get('receiverName');
  }


  ngOnInit(): void {
    this.data.issueData(this.issueView);

    if (this.issueView.attachment === '' || this.issueView.attachment == 'undefined') {
      this.attachment = ''
    } else {
      this.attachment = this.issueView.attachment.replace(/^.*[\\\/]/, '')
    }

    this.comments();
    this.getUserName()
    this.getWatcher()
  }



  getUserName = () => {
    this.subscription1$ =  this.appService.getAllUsers().subscribe(
      (data) => {
        this.allUsers = data;
        this.allUsers.data.map((user) => {
          if (this.receiverId === user.userId) {
            this.assignee = user.firstName + " " + user.lastName;

          }
        })
      }, (error) => {
        this.assignee = 'Failed to load user name';
      }
    )

  }


  addComment = () => {
    if (!this.comment) {
      alert("Type to post a comment");
    } else {
      let data = {
        issueID: this.issueView.issueID,
        userID: this.receiverId,
        userName: this.receiverName,
        comment: this.comment
      }
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.appService.postComment(data).subscribe(
          (data) => {
            this.commentResponse = data;
            this.toastr.success("Comment added successfully");
            let socket_data = {
              receiverName: this.receiverName,
              IssuName: this.issueView.issueName,
              comment: this.comment
            }
            this.SocketService.addComment(socket_data);
            this.comment = ""
            this.comments();
          }, (error) => {
            this.toastr.warning("Failed to add a Comment");
          }
        )
      }, 1000)

    }

  }

  comments = () => {
    this.subscription2$ = this.appService.getComments(this.issueView.issueID).subscribe(
      (data) => {
        this.AllComments_data = data;
        this.AllComments = this.AllComments_data.data
     
      }, (error) => {
        this.toastr.warning("Failed to load comments");
      }
    )
  }

  getWatcher = () => {
   
    this.subscription3$ = this.appService.getwatchers(this.issueView.issueID).subscribe(
      (data) => {
      
        this.allWatchers = data['data'];
        if (this.allWatchers) {
          this.allWatchers.forEach((watcher, index) => {
            if (watcher.userID == this.receiverId) {
              this.currentWatcher = watcher.watcherID;
              this.watch = true

              if (index == this.allWatchers.length - 1) {

                this.sendWatchersData(index)
              }
            }
          });
        }


        // for(let watcher of this.allWatchers){

        //   if(watcher.userID == this.receiverId){
        //     this.currentWatcher = watcher.userID
        //   }

        // }
      }
    )
  }

  sendWatchersData = (index) => {
    let data = {
      count: index,
      watch: this.watch,
    }
    this.watcherData.emit(data)
  }


  addWatcher = () => {
    let data = {
      issueID: this.issueView.issueID,
      userID: this.receiverId,
    }
    this.appService.addWatcher(data).subscribe(
      (data) => {
        this.getWatcher();
        this.toastr.success(this.issueView.issueName + " " + 'Issue', "You will recieve updates for")
      }, (error) => {
        this.toastr.warning("Failed to add you as a watcher");
      }
    )
  }

  removeWatcher = () => {
    this.appService.removewatcher(this.currentWatcher).subscribe(
      (data) => {
        this.getWatcher();
        this.toastr.success(this.issueView.issueName + " " + 'Issue', "You will no longer recieve updates for")
      }, (error) => {
        this.toastr.warning("Failed to remove you as a watcher");
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription1$.unsubscribe();
    this.subscription2$.unsubscribe();
    this.subscription3$.unsubscribe();
    this.subscription4$.unsubscribe();

  }
}

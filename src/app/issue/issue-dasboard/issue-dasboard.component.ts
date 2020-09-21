import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, filter } from 'rxjs/operators';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router } from '@angular/router';

import { AppService } from 'src/app/app.service';
import { AddIssueComponent } from '../add-issue/add-issue.component';
import { IssueViewComponent } from '../issue-view/issue-view.component';
import { SocketService } from 'src/app/socket.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { MyIssuesComponent } from '../my-issues/my-issues.component';
import { OtherIssuesComponent } from '../other-issues/other-issues.component';

@Component({
  selector: 'app-issue-dasboard',
  templateUrl: './issue-dasboard.component.html',
  styleUrls: ['./issue-dasboard.component.css'],
  providers: [SocketService]

})
export class IssueDasboardComponent {

  public authToken: any;
  public userInfo: any;
  public userList: any = [];
  public disconnectedSocket: boolean;

  public noIssues: boolean = true;
  public myIssues: boolean = false;
  public otherIssues: boolean = false;
  public addIssue: boolean = false;
  public issueViewId: boolean = false;
  public submit: boolean = false;
  public myIssueView: boolean = false

  public receiverId: any;
  public receiverName: any;

  public myIssueList: any = [];
  public otherIssueList: any = [];
  public watchCount: number = 0;

  @ViewChild('watcher') watcher: IssueViewComponent;
  @ViewChild('addIssue') addIssueComponent: AddIssueComponent;
  @ViewChild('myissueParent') myissueParent: MyIssuesComponent;
  @ViewChild('otherIssueParent') otherIssueParent: OtherIssuesComponent;
  
  timer: any;
  issueView: any;
  watch: boolean;

  constructor(
    private router: Router,
    private appService: AppService,
    private route: Router,
    private cdRef: ChangeDetectorRef,
    public SocketService: SocketService,
    private toastr: ToastrService,
    private SpinnerService: NgxSpinnerService,


  ) {
    this.cdRef.detectChanges;
    this.receiverId = Cookie.get('receiverId');

    this.receiverName = Cookie.get('receiverName');

    this.authToken = Cookie.get('authtoken');
  }

  ngOnInit(): void {
    this.checkStatus()
    this.verifyUserConnection();
    this.addIssueResponse();
    this.updateIssueResponse();
    this.addCommentResponse();

  }

  public checkStatus: any = () => {

    if (Cookie.get('authtoken') === undefined || Cookie.get('authtoken') === '' || Cookie.get('authtoken') === null) {

      this.SpinnerService.show();

      this.router.navigate(['login'])

      return false;

    } else {

      return true;

    }
  }


  public verifyUserConnection: any = () => {

    this.SocketService.verifyUser()

      .subscribe((data) => {

        this.disconnectedSocket = false;

        this.SocketService.setUser(this.authToken);

      });
  }//end verifyUserConnection

  //===================================END OF VERIFY USER===========================================//

  myIssue = () => {
    clearTimeout(this.timer);
 
    this.timer = setTimeout(() => {
      this.appService.getAllissuesOfuser(this.receiverId)
        .subscribe(
          (data) => {
            this.SpinnerService.show()
            setTimeout(()=>{
              this.myIssueList = data.data;
            },500)
           
           
            this.noIssues = false;
            this.myIssues = true;
            this.addIssue = false;
            this.issueViewId = false
          }
        )
    }, 1000)
  }


  otherIssue = () => {
    this.noIssues = false;
    this.myIssues = false;
    this.otherIssues = true;
    this.addIssue = false;
  }

  addIssuelist = () => {
    this.noIssues = false;
    this.myIssues = false;
    this.otherIssues = false;
    this.addIssue = true;
    this.issueViewId = false
    this.submit = false
  }

  edit = () => {
    this.addIssuelist()
    this.submit = true;
   

  }


  receiveIssue($event) {
    this.issueView = $event
    this.issueViewId = true;
    this.noIssues = false;
    this.myIssues = false;
    this.otherIssues = false;
    this.addIssue = false;
 
    if (this.issueView.userId == this.receiverId) {
      this.myIssueView = true;

    } else if (this.issueView.userId != this.receiverId) {
      this.myIssueView = false;
     
    }
  }

  watchIssue = () => {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.watch = !this.watch;
      this.cdRef.detectChanges;
      if (this.watch == true) {
        this.watcher.addWatcher()
      } else if (this.watch == false) {
        this.watcher.removeWatcher()
      }
    }, 1000)

  }


  watcherInfo = (event) => {
  
    this.cdRef.detectChanges;
    this.watch = event.watch;
    this.watchCount = event.count;

  }


  public logout = () => {

    this.SpinnerService.show();

    this.appService.logout().subscribe(

      (apiResponse) => {

        if (apiResponse.status === 200) {

          Cookie.delete('authtoken');

          Cookie.delete('receiverId');

          Cookie.delete('receiverName');

          this.SocketService.disconnectedSocket();

          this.SocketService.exitSocket()

          this.router.navigate(['/']);

        } else {

          this.toastr.error(apiResponse.message);

          this.SpinnerService.hide();


        }
      },

      (err) => {

        this.toastr.error('some error occured');

        this.SpinnerService.hide();


      });
  }


  addIssueResponse = () =>{
    this.SocketService.createIssueResponse().subscribe(
      (data)=>{
        this.toastr.success(data);
        this.otherIssueParent.otherIssue();

    })
  }

  updateIssueResponse = () =>{
    this.SocketService.updateIssueResponse().subscribe(
      (data)=>{
        this.toastr.success(data);
        this.otherIssueParent.otherIssue();
    })
  }
  addCommentResponse = () =>{
    this.SocketService.addCommentResponse().subscribe(
      (data)=>{
        this.toastr.success(data)
        this.watcher.comments()
    })
  }

}

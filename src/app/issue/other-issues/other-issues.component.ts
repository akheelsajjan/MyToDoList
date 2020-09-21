import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef, ChangeDetectionStrategy, NgZone, OnDestroy } from '@angular/core';
import { HostListener } from "@angular/core";
import { AppService } from 'src/app/app.service';
import { Observable, Subscription } from 'rxjs';
import { Issue } from '../issue';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-other-issues',
  templateUrl: './other-issues.component.html',
  styleUrls: ['./other-issues.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class OtherIssuesComponent implements OnInit,OnDestroy {


  screenHeight: number;
  screenWidth: number;
  
  otherIssueList2: any;
  p: number = 1;
  value:number = 5;
  timer:any
  order: string = '';
  reverse: boolean = false;
  term:any
  otherIssueList: Issue[];

  subscription$: Subscription;

  @Output() issueEvent = new EventEmitter<string>();

 
  
  
  constructor(private zone:NgZone,private appService: AppService,  private SpinnerService: NgxSpinnerService,private cdRef: ChangeDetectorRef,) { 
    this.getScreenSize();
    
  }

  ngOnInit(): void {
    this.SpinnerService.show()
    this.otherIssue();
  //  this.cdRef.detectChanges()
  }
  
 
  otherIssue = () => {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {

    this.subscription$ = this.appService.getAllIssues()
        .subscribe(
          (data) => {
      //      this.zone.run(()=>{
              this.otherIssueList = data['data'];
              this.SpinnerService.hide()
        //    })

          }
        )
    }, 1000)

  }


  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
  
        if(this.screenWidth < 540){
          this.value = 5;
        } else if(this.screenWidth > 540 && this.screenWidth < 768){
          this.value = 5;
        } else if(this.screenWidth >= 768 && this.screenWidth < 992){
          this.value = 5;
        }else{
          this.value = 9;
        }
  }

  issueView = (issue) =>{
    this.issueEvent.emit(issue)
}
setOrder(value: string) {
  if (this.order === value) {
    this.reverse = !this.reverse;
  }

  this.order = value;
}

ngOnDestroy(): void {
  this.subscription$.unsubscribe();
  console.log("called")
}


}

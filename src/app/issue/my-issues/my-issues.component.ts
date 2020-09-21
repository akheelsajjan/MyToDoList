import { Component, OnInit,Input, Output, EventEmitter, HostListener  } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Issue } from '../issue';

@Component({
  selector: 'app-my-issues',
  templateUrl: './my-issues.component.html',
  styleUrls: ['./my-issues.component.css']
})
export class MyIssuesComponent implements OnInit {

  @Input() myIssueList: any[];
  @Output() issueEvent = new EventEmitter<string>();

  issueList:Issue[]

  screenHeight: number;
  screenWidth: number;

  p: number = 1;
  value:number = 5;

  constructor(private SpinnerService: NgxSpinnerService,) {
    this.getScreenSize()
   }

  ngOnInit(): void {
 
      this.issueList=this.myIssueList
      this.SpinnerService.hide();
    
   
  }
  

  issueView = (issue) =>{
      this.issueEvent.emit(issue)
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

}

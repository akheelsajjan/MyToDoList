import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueDasboardComponent } from './issue-dasboard/issue-dasboard.component';
import { IssueViewComponent } from './issue-view/issue-view.component';
import { RouterModule } from '@angular/router';
import { MyIssuesComponent } from './my-issues/my-issues.component';
import { OtherIssuesComponent } from './other-issues/other-issues.component';
import { AddIssueComponent } from './add-issue/add-issue.component';
import { ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxPaginationModule } from 'ngx-pagination';
import { sortvalue } from '../pipes/sort';
import { OrderModule } from 'ngx-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [IssueDasboardComponent, IssueViewComponent, MyIssuesComponent, OtherIssuesComponent, AddIssueComponent,sortvalue],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularEditorModule,
    FormsModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    OrderModule,
    Ng2SearchPipeModule,
    RouterModule.forChild([
      {path: '',component: IssueDasboardComponent},
      {path: 'issue/:id', redirectTo:'', pathMatch:'full' }
    ])
  ]
})
export class IssueModule { }

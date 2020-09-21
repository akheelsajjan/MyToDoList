import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';



import { AppService } from './app.service';



import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { CountdownModule } from 'ngx-countdown';
import { DatePipe } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AngularEditorModule } from '@kolkov/angular-editor';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgpSortModule } from "ngp-sort-pipe";
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ServerErrorComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    CountdownModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    AngularEditorModule,
    NgxPaginationModule,
    FormsModule,
    NgpSortModule,
    OrderModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () => import('./user/user.module').then(m => m.UserModule)
        },
        {
          path: 'issue',
          loadChildren: () => import('./issue/issue.module').then(m => m.IssueModule)
        },
        { path: 'page-not-found', component: PageNotFoundComponent },
        { path: 'server-error', component: ServerErrorComponent },
        
      ]
    ),

    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(
      {
        timeOut: 2000,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
      }
    ), // ToastrModule added
    

  ],
  exports: [RouterModule],
  providers: [AppService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

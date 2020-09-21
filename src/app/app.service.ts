import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Issue } from './issue/issue';


@Injectable({
  providedIn: 'root'
})
export class AppService {


 private url = 'http://api.techblogs.live/api/v1/users/';

  // private url = 'http://localhost:3000/api/v1/users/';



  constructor(public http: HttpClient ) {
    
  }

  //-------------------SIGN-(IN-UP-OUT)-------------------//

  public getUserInfoFromLocalStorage = () => {

    return JSON.parse(localStorage.getItem('userInfo'));

  }// getUserInfoFromLocalStorage end here

  public setUserInfoInLocalStorage = (data) => {

    localStorage.setItem('userInfo', JSON.stringify(data));

  }// setUserInfoFromLocalStorage end here

  public signupFunction(data): Observable<any> {

    const params = new HttpParams()

      .set('firstName', data.firstName)

      .set('lastName', data.lastName)

      .set('mobile', data.mobile)

      .set('email', data.email)

      .set('password', data.password);

    return this.http.post(this.url + 'signup', params);


  }// signupFunction end 


  public signinFunction(data): Observable<any> {

    const params = new HttpParams()

      .set('email', data.email)

      .set('password', data.password);

    return this.http.post(this.url + 'login', params);

  }// signinFunction end 

  public logout(): Observable<any> {

    const params = new HttpParams()

      .set('authToken', Cookie.get('authtoken'))


    return this.http.post(this.url + 'logout', params);

  } // end logout function

  public verifyEmail = (userId): Observable<any> => {

    return this.http.get(this.url + userId +'/userVerification');

  }

  public forgotPassword = (email) => {

    const params = new HttpParams()

      .set('email', email)

     // .set('authToken', Cookie.get('authtoken'));

    return this.http.post(this.url + 'forgotPassword', params);

  }

  public updateUser = (data) => {

    const params = new HttpParams()

      .set('userId', data.userId)

      .set('password', data.password);

      return this.http.post(this.url + 'resetPassword', params);

  }

  public getAllUsers = () => {

    return this.http.get(this.url + 'view/all'  + `?authToken=${Cookie.get('authtoken')}`)

  }


  public getUserDetails = (userId) => {

    return this.http.get(this.url + userId + '/details' + `?authToken=${Cookie.get('authtoken')}`);

  } 
  

  public getCountry = () =>{
    return this.http.get('../assets/country.json')
  }

  
  public getCountryCode = () =>{
    return this.http.get('../assets/countrycode.json')
  }


  

  //-------------------END OF SIGN-(IN-UP-OUT)----------------------------------//

  //----------------------------------Issue-SERVICE---------------------------------------------//

  private url_issue = 'http://api.techblogs.live/api/v1/issue/';

 //private url_issue = 'http://localhost:3000/api/v1/issue/';

  public submitIssue = (data) => {
  
    const params = new HttpParams()

      .set("issueName", data.issueName)

      .set("userId", data.userId)

      .set("reporterName", data.reporterName)

      .set("status", data.status)

      .set("discription", data.discription)

      .set("assignedTo", data.assignedTo)

      .set("attachment", data.attachment)

      .set("authToken", Cookie.get('authtoken'))

    return this.http.post(this.url_issue + 'create', params);

  }

  public getAllissuesOfuser = (userId):Observable<any> => {

    return this.http.get(this.url_issue + userId + '/allIssues'   +`?authToken=${Cookie.get('authtoken')}`);

  }

  public getOtherIssues = (userId):Observable<any> => {

    return this.http.get(this.url_issue + userId + '/allIssues' + `?authToken=${Cookie.get('authtoken')}`);

  }

 
  public getAllIssues = ():Observable<Issue[]> => {

    return this.http.get<Issue[]>(this.url_issue + 'allIssues' + `?authToken=${Cookie.get('authtoken')}`)
    
  }

  public deleteList = (listId) => {

    return this.http.post(this.url_issue + listId + '/delete' + `?authToken=${Cookie.get('authtoken')}`, listId);

  }


  public editIssue = (data,issueID) => {

    const params = new HttpParams()

    .set("reporterName", data.reporterName)

    .set("status", data.status)

    .set("discription", data.discription)

    .set("assignedTo", data.assignedTo)

    .set("attachment", data.attachment)

    .set("authToken", Cookie.get('authtoken'))

    return this.http.put(this.url_issue + 'editIssue/' + issueID , params);

  }



  //----------------------Comment-service-----------------------------------//

  private url_comment = 'http://api.techblogs.live/api/v1/comments/';

 // private url_comment = 'http://localhost:3000/api/v1/comments/';

  public postComment = (data):Observable<any> => {
   
    const params = new HttpParams()

      .set("issueID", data.issueID)

      .set("userID", data.userID)

      .set("userName", data.userName)

      .set("comment", data.comment)

      .set("authToken", Cookie.get('authtoken'))
    
    return this.http.post(this.url_comment + 'addcomments/'+ data.issueID, params);
   
  }

  public getComments = (issueID):Observable<any> => {

    return this.http.get(this.url_comment + 'getcomments/' + issueID+ `?authToken=${Cookie.get('authtoken')}`)

  }

  //----------------------Watcher-service-----------------------------------//


  private url_watcher = 'http://api.techblogs.live/api/v1/watcher/';

  // private url_watcher = 'http://localhost:3000/api/v1/watcher/';

  public addWatcher = (data) => {

    const params = new HttpParams()

      .set("issueID", data.issueID)

      .set("userID", data.userID)

      .set("authToken", Cookie.get('authtoken'))

    return this.http.post(this.url_watcher + 'addWatcher/' + data.issueID, params);

  }

  public getwatchers = (issueID) => {

    return this.http.get(this.url_watcher + 'getwatchers/' + issueID + `?authToken=${Cookie.get('authtoken')}`);

  }

  public removewatcher = (watcherID) => {

    return this.http.put( this.url_watcher +  'removeWatcher/'+  watcherID +`?authToken=${Cookie.get('authtoken')}`, watcherID);

  }








}

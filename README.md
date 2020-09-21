Project Name - <h2>Issue Tracking Tool</h2>

<!-------Landing Page--------->

<u>Sign-In:</u>
Two fields are present, where user has to enter Email-Id and Password to login.
If the credentials given are correct and if the user exits in database, user shall be logged In,
Else appropriate message will be shown to user.
User can click on Forgot Password if user dosn't remember the password.

Sign-Up:
There are total 6 fields. All are required to sign-up. The fields include "firstName", "lastName", "Country Code",
"Mobile Number", "Email Address" and "Password". The password must contain  atleast one digit, atleast one lowercase and
uppercase, a special character, and length should be minimum 8 and maximum 32.
On successfull login user shall get  message to user's maild-id, where user has to verify the email.
If user is already present with the given email-Id, user shall be redirected to login page. 

Forgot-Password:
User has to enter email-id to get the reset link.
If user is not present with given email, user shall be redirected to sign-up page.

Reset Password:
User has to enter the new password, the password must contain  atleast one digit, atleast one lowercase and
uppercase, a special character, and length should be minimum 8 and maximum 32.
User shall be redirected to login page after reseting the password.

<!-------End Of Landing Page--------->



<!-------Issue Tracker--------------->

<h2>Dasboard View:</h2>
The dashbord has two boards.
<b>i)Static dashboard: <b>
  On to the left is the static dashboard. The view remains constant through-out the application.
  It starts with a greeting to a user("Hello" followed by name).
  It has a add issue button with '+' button.
  It has two buttons grouped-'My Issues' button & 'Other Issues button'.

<b>ii)Dynamic dashboard:<b>
   The big view on right side is the 'Dynamic dashboard'.
   By default on page load, 'Welcome to Issue Tracker' is displayed.

   On click of 'Add Issue' a form is displayed.The form has following inputs
    -Issue Name  : Text input, mandatory field.
    -Issue Status: A drop down with values 'backlog','in-progress','in-test' & 'done'.Mandatory field.
    -Description : Text input with rich text editor. Mandatory field.
    -Assigned to : A dropdown which has all the users. Mandatory field.
    -Attachments : File input.Not a mandatory field.
   A clear button, to clear all fields.
   A submit button. Disabled by default. It is enabled once all the mandatory fields are field.
   After clicking on submit we get a review box.On clicking submit the form will be successfully submited.
   Cancel would close the box.

   On click of 'My Issues' button on static dashboard, A tabel is displayed on Dynamic Dashboard.
   The tabel has all the issues created by logged in user.

   On click of 'Other Issues' button on static dashboard, A tabel is displayed on Dynamic Dashboard.
   The tabel has all the issues of all the users.

   On clicking of any one of the issues inside a tabel, Issue View box is displayed. All the info related to that issue 
   will be displayed. 
   On the top there is a 'Edit' & 'Watcher' button. At the there is a comment input text field with add button. Comments 
   will be displayed for a particular issue if present.

   On click of 'Edit' a form will appear with title input disabled. It has the same features as that on clicking 'add issues'.
   The watcher button will be enabled by default for users who created the issue and will not be editable.
   The watcher button will be crossed by default for other users(If issue was not created by them).It will be a toggle type button.

   Comments can be added. Currently logged in users comment will appear on right and other users comment will be on left.

<!----End Of Issue Tracker--------------->


ExtraFeatures: I have used Loader/Spinner. For Loader/Spinner I have used ngx-spinner which will be displayed until user gets response.
               For rich text editor I have used ngx editor.

		 
Github repository link of this project:	https://github.com/akheelsajjan/MyToDoList

<!-------URL------------>

Frontend:  http://techblogs.live/
Backend :  http://api.techblogs.live/
Docs    :  http://docs.techblogs.live/













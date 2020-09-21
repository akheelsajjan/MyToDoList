import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, MinLengthValidator } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { DataService } from 'src/app/data.service';

//aws
import * as AWS from 'aws-sdk';
import { S3 } from 'aws-sdk';
import { ToastrService } from 'ngx-toastr';
import { SocketService } from 'src/app/socket.service';


@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css'],
  providers: [SocketService]
})
export class AddIssueComponent implements OnInit, OnChanges {

  profileForm: FormGroup;
  issueStatus = ['backlog', ' in-progress', 'in-test', 'done'];
  allUsers: any;
  allUser = []
  issueValue: any;
  fileName: string
  receiverId: any;
  receiverName: any;
  timer: any;
  edit_issue: any;
  fileToUpload: File = null;
  uploadDifferntFile: boolean = true
  apiResponse: boolean = false
  close: boolean = false;
  awsLocation: any;
  @Input('submit') edit_submit: boolean;
  response: string;
  apiResponseSuccess: Object;
  @ViewChild('closePreview') closePreview: ElementRef;
  attachment: string;

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService,
    private data: DataService,
    private toastr: ToastrService,
    public SocketService: SocketService,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.edit_submit) {
      this.createIssue()
      this.clear()
    }

    if (!this.apiResponse && this.close) {
      this.closePreview.nativeElement.click()
    }
  }

  ngOnInit(): void {

    this.receiverId = Cookie.get('receiverId');
    this.receiverName = Cookie.get('receiverName');

    this.createIssue();

    this.users();
    if (this.edit_submit) {
      this.edit();
      if (this.attachment === '' || this.attachment == 'undefined') {
        this.attachment = ''
      } else {
        this.attachment = this.attachment.replace(/^.*[\\\/]/, '')
      }
    }
  }

  createIssue = () => {
    this.profileForm = this.formBuilder.group({
      issueName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      status: ['', [Validators.required]],
      discription: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      assignedTo: ['', [Validators.required]],
      attachments: ['',]
    });
  }
  get f() { return this.profileForm.controls; }

  users = () => {
    this.appService.getAllUsers().subscribe(
      (data) => {
        this.allUsers = data;
        this.allUser = this.allUsers.data;

      }
    )
  }



  clear = () => {
    this.profileForm.reset();
    this.profileForm.get('issueName').enable();
    this.issueValue = '';
    this.fileName = ''
    this.attachment = ''
  }

  response_data = () => {
    if (this.apiResponse) {
      this.apiResponse = false;
      this.close = true
    }

  }

  submit = () => {
    this.issueValue = this.profileForm.value;
    if (this.edit_submit) {
      this.issueValue.issueName = this.edit_issue.issueName
    }

    if (this.uploadDifferntFile) {
      this.fileName = this.edit_issue.attachment
    }

  }

  fileEvent = (e) => {
  
    this.awsFileUpload(e.target.files[0]).then(
      (res) => {
        this.toastr.success("file uploaded")
        this.awsLocation = res['Location']
        this.fileName = this.awsLocation.replace(/^.*[\\\/]/, '')
        //console.log("file event 1"+this.awsLocation.replace(/^.*[\\\/]/, ''))
      }
    )
    this.uploadDifferntFile = false
  }



  submit_true = () => {

    let data_issue = {
      issueName: this.issueValue.issueName,
      userId: this.receiverId,
      reporterName: this.receiverName,
      status: this.issueValue.status,
      discription: this.issueValue.discription,
      assignedTo: this.issueValue.assignedTo,
      attachment: this.awsLocation,
    }

    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      if (!this.edit_submit) {

        this.appService.submitIssue(data_issue).subscribe(
          (data) => {
            this.apiResponseSuccess = data;
            this.apiResponse = true;


            let socket_data = {
              receiverName: this.receiverName,
              IssuName: this.issueValue.issueName
            }

            this.toastr.success('New Issue Created Successfully');
            this.response = 'New Issue Created Successfully';
            this.SocketService.createIssue(socket_data)
            this.clear()
          },
          (err) => {
            this.toastr.warning('Failed to create Issue');
          }
        )
      } else {
        this.appService.editIssue(data_issue, this.edit_issue.issueID).subscribe(
          (data) => {
            this.apiResponseSuccess = data;
            this.apiResponse = true;
            this.response = 'Issue edited Successfully'
            this.toastr.success(' Issue Edited  Successfully');

            let socket_data = {
              receiverName: this.receiverName,
              IssuName: this.issueValue.issueName
            }
            this.SocketService.updateIssue(socket_data);
            this.clear()
            this.edit_submit = false
          },
          (err) => {
            this.toastr.warning('Failed to edit Issue');
          }
        )
      }
    }, 1000)

  }

  // fileUpload(file) {
  //   console.log('called')
  //   const contentType = file.type;
  //   const bucket = new S3(
  //         {
  //             accessKeyId: 'AKIAJEQSLD5RKRBVBMTQ',
  //             secretAccessKey: '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',
  //             region: 'ap-south-1',

  //         }
  //     );

  //     const params = {
  //         Bucket: 'akheel-angular-issue-tracker-2',
  //         Key:  file.name,
  //         Body: file,
  //         ACL: 'public-read',
  //         ContentType: contentType
  //     };
  //     bucket.upload(params, function (err, data) {
  //         if (err) {
  //             console.log('EROOR: ',JSON.stringify( err));
  //             return false;
  //         }
  //         console.log('File Uploaded.', data);
  //         this.awsLocation = data.Location
  //         console.log(this.awsLocation)
  //         return true;
  //     });
  //   }

  awsFileUpload = (file) => {
    return new Promise((resolve, reject) => {
      const contentType = file.type;
      const bucket = new S3(
        {
          accessKeyId: 'AKIAJEQSLD5RKRBVBMTQ',
          secretAccessKey: '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',
          region: 'ap-south-1',

        }
      );

      const params = {
        Bucket: 'akheel-angular-issue-tracker-2',
        Key: file.name,
        Body: file,
        ACL: 'public-read',
        ContentType: contentType
      };
      bucket.upload(params, function (err, data) {
        if (err) {
          this.toastr.warning('Failed to Upload');
          console.log('EROOR: ', JSON.stringify(err));
          return false;
        }
 
        resolve(data)
      });
    })
  }




  edit = () => {
    this.data.currentMessage.subscribe(
      (data) => {
        this.edit_issue = data
        this.profileForm.get('issueName').setValue(this.edit_issue.issueName)
        this.profileForm.get('issueName').disable();
        this.profileForm.get('status').setValue(this.edit_issue.status)
        this.profileForm.get('discription').setValue(this.edit_issue.discription)
        this.profileForm.get('assignedTo').setValue(this.edit_issue.assignedTo)
        this.attachment = this.edit_issue.attachment.replace(/^.*[\\\/]/, '')

      }
    )
  }




  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '8rem',
    minHeight: '8rem',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    // uploadUrl: 'v1/image',
    //uploadWithCredentials: false,
    //sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };

}

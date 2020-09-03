import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import BugStatus from './models/BugStatus';
import { Application } from './models/Application';
import { BugReport } from './models/BugReport';
import {BugLibService} from './bug-lib.service';


@Component({
  selector: 'lib-bug-lib',
  template: `
  <button (click) ="openBugReportModal()" class = "button-main"> <img src="http://bug-bounty-system.s3-website.us-east-2.amazonaws.com/Ladybug-128.png" style="width:30px;height:30px;"></button>
    
  <div *ngIf ="reportModal" class="modal">
    <div class="modal-content">
      <div class="modal-header">
          <span (click)="closeBugReportModal()" class="close">&times;</span>
      </div>
      <div class="modal-container">
        <div class="modal-body">
        <div class="container">
        <h1>New Bug Report</h1>
        <div class="col">
            <form [formGroup]="bugForm">


            <label class="formLabel">Application:</label>
            <div class="form-group">
              <select class="dropDown" formControlName="application">
                  <option value="" disabled>Choose application</option>
                  <option *ngFor="let application of applicationNameList" [ngValue]="application">{{application}}</option>
              </select>
            </div>

            <label class="formLabel">Title:</label>
            <div class="form-group">
                <input class = "inputType" type="text" formControlName="title" required> 
            </div>
            
            
            <label class="formLabel">Suspected Location:</label>
            <div class="form-group">
                <input class = "inputType" type="text" formControlName="suspectedLocation">
            </div>
            <div class="form-group-b">
                <label class="formLabel">Severity:</label>
                <select class="dropDown" formControlName="severity">
                    <option value="" disabled>Choose severity</option>
                    <option *ngFor="let severity of severityLevel" [ngValue]="severity">{{severity}}</option>
                </select>
    
                <label class="formLabel">Priority:</label>
                <select class="dropDown" formControlName="priority">
                    <option value="" disabled>Choose priority</option>
                    <option *ngFor="let priority of priorityLevel" [ngValue]="priority">{{priority}}</option>
                </select>
            </div>
            <label class="formLabel">Reporter:</label>
            <div class="form-group">
                <input class = "inputType" type="text" formControlName="reporter">
            </div>
            
            <label class="formLabel">Description:</label>
            <div class="form-group">
                <textarea rows="5" cols="25" class = "inputTypeBig"></textarea>
            </div>
    
            <label class="formLabel">Reproduce Steps:</label>
            <div class="form-group">
                <textarea rows="5" cols="25" class = "inputTypeBig"></textarea>
            </div>
    
            <br>
            <div class="modal-action-buttons">
            <button class="modal-cancel-btn">
                <div class="modal-btn-label-wrapper">
                    <div class="modal-btn-label">
                        Cancel
                    </div>
                </div>
            </button>
            <button class="modal-submit-btn">
                <div class="modal-btn-label-wrapper">
                    <div class="modal-btn-label">
                        Publish
                    </div>
                </div>
            </button>
            </div>
            </form> 
            <p *ngIf="failToPost" class="warningPost">The bug failed to post. Please review the request</p>
            
        </div>
    </div>
        </div>
      </div>
    </div>   
  </div>
  `,
  styles: [ 
    `
    .button-main {
      border-radius: 15px;
      background-color: #E8E8E8; 
      // background-image: url('http://bug-bounty-system.s3-website.us-east-2.amazonaws.com/Ladybug-128.png');
      // color: white; 
      // font-weight: bold;
      border: 2px solid #f44336;
      width:60px;
      height:38px;
      // text-align: center;
      // text-decoration: none;
      display: inline-block;
      // font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
    }
    .modal
        {-webkit-box-align:center;
        align-items:center;
        background:rgba(25,25,25,0.9);
        bottom:0;
        display:flex;
        -webkit-box-pack:center;
        justify-content:center;
        left:0;
        overflow:auto;
        position:fixed;
        right:0;
        top:0;
        z-index:800;
        -webkit-animation-name:animatetop;
        -webkit-animation-duration:.4s;
        animation-name:animatetop;
        animation-duration:.4s
      }
      .modal-content
        {display:flex;
        -webkit-box-orient:vertical;
        -webkit-box-direction:normal;
        flex-direction:column;
        margin:15px;
        max-height:80vh;
        width:40%;
        min-width:0;
        z-index:800;
        text-align:left;
        background-color: #ff8080;
        border: 2px solid black;
        overflow:auto;padding:30px;
        position:relative
      }
      @-webkit-keyframes animatetop
      {from{top:-300px;opacity:0}to{top:0;opacity:1}}
      @keyframes animatetop{from{top:-300px;opacity:0}to{top:0;opacity:1}}
      
      .modal-header
      {padding:10px;color:white}
      
      .close{color:#3a3a3a;float:right;font-size:28px;font-weight:bold}
      
      .close:hover{cursor:pointer}
      
      .close:focus{color:#000}
      
      .container{
        margin-top: 20px;
        margin-bottom: 20px;
        padding-top: 10px;
        padding-left: 40px;
        padding-bottom: 10px;
    }
    
    .form-group{
      padding: 10px;
    }

    .form-group-b{
      padding: 17px;
    }

    .formLabel{
        font-size: 16px;
    }
    
    .container{
        border-style: groove;
        border-radius: 20px;
    }
    
    .formLabel{
        width: 20%;
    }
    
    .dropDown{
        padding: 3px 3px;
        margin: 0 50px 0 0;
        border: 2px solid black;
    }
    
    .buttonGroup{
        text-align: right;
    }
    
    .inputType{
        width: 50%;
        border: 2px solid black;
    }

    .inputTypeBig{
      width: 50%;
      height: 60px;
      border: 2px solid black ;
  }
    
    .warningPost{
        color:red;
        text-align: center;
    }



    
    .modal-cancel-btn
    {margin-left:-5px;
      margin-right:5px;
      background:#fff;
      border-color:transparent;
      color:#696969;
      border:1px solid transparent;
      border-radius:5px;
      cursor:pointer;
      display:inline-block;
      font-weight:600;
      line-height:1;
      -webkit-transition-duration:300ms;
      transition-duration:300ms;
      -webkit-transition-property:color,background;
      transition-property:color,background;
      -webkit-user-select:none;
      -moz-user-select:none;
      -ms-user-select:none;
      user-select:none}
      
      .modal-submit-btn
      {margin-left:-5px;
        margin-right:5px;
        background:#74c687;
        border-color:transparent;
        color:#fff;
        border:1px solid transparent;
        border-radius:5px;
        cursor:pointer;
        display:inline-block;
        font-weight:600;
        line-height:1;
        -webkit-transition-duration:300ms;
        transition-duration:300ms;
        -webkit-transition-property:color,background;
        transition-property:color,background;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none}
        
        .modal-btn-label
        {padding:8px 18px;
          border-radius:20px;
          -webkit-box-align:center;
          align-items:center;
          display:-webkit-box;
          display:flex;
          -webkit-box-pack:center;
          justify-content:center}
          
          .modal-btn-label-wrapper
          {font-size:14px;
            border:1px solid transparent;
            display:inline-block;
            max-width:100%}

          .modal-action-buttons
          {margin-top:30px;
            text-align:right}
      `
  ]
})

export class BugLibComponent implements OnInit {

    bugForm =  this.fb.group({
        title: ['', Validators.required],
        application: ['', Validators.required],
        suspectedLocation: [''],
        severity: [''],
        priority: [''],
        reporter: [{value: '', disabled: true}],
        description: ['', Validators.required],
        reproduceSteps: ['']
    });
    
      // client:Client;
    applicationList: Application[] = [];
    applicationNameList = [];
    priorityLevel = ['Low', 'Medium', 'High'];
    severityLevel = ['Low', 'Medium', 'High'];
    failToPost:boolean = false;
    reportModal:boolean;
      
    constructor(private fb: FormBuilder,  private apiService: BugLibService) { }
    
    async submitReport(){
       console.log( await this.apiService.getBugReports());

        const report = new BugReport();
        report.title = this.bugForm.value.title;
        report.location = this.bugForm.value.suspectedLocation;
        report.repSteps = this.bugForm.value.reproduceSteps;
        report.priority = this.bugForm.value.priority;
        report.severity = this.bugForm.value.severity;
        report.description = this.bugForm.value.description;
        report.status = BugStatus.requested;
        for (const app of this.applicationList){
          if (app.title === this.bugForm.value.application){
            report.app = app;
          }
        }
        report.createdTime = new Date().getTime();
    
        // const result = await this.apiService.submitNewBugReport(report);
    
    }

    ngOnInit(): void {
    }

    openBugReportModal(){
        this.reportModal = true;
    }

    closeBugReportModal(){
        this.reportModal = false;
    }
}

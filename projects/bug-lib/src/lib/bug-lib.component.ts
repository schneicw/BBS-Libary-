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
  <button (click) ="openBugReportModal()"> Click to add </button>
    

  <div *ngIf ="reportModal" class="modal">
    <div class="modal-content">
      <div class="modal-header">
          <span (click)="closeBugReportModal()" class="close">&times;</span>
      </div>
      <div class="modal-container">
        <div class="modal-body">
        <div class="container">
        <h1>Bug Report #</h1>
        <div class="col">
            <form [formGroup]="bugForm">
            <div class="form-group">
                <label class="formLabel">Title:</label>
                <input class = "inputType" type="text" formControlName="title" required> 
            </div>
            
            <div class="form-group">
                <label class="formLabel">Application:</label>
                <select class="dropDown" formControlName="application">
                    <option value="" disabled>Choose application</option>
                    <option *ngFor="let application of applicationNameList" [ngValue]="application">{{application}}</option>
                </select>
            </div>
            
            <div class="form-group">
                <label class="formLabel">Suspected Location:</label>
                <input class = "inputType" type="text" formControlName="suspectedLocation">
            </div>
            <div class="form-group">
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
            <div class="form-group">
                <label class="formLabel">Reporter:</label>
                <input class = "inputType" type="text" formControlName="reporter">
            </div>
            
            <div class="form-group">
                <label class="formLabel">Description:</label>
                <editor formControlName="description" required [init]="{
                    base_url: '/tinymce', 
                    suffix: '.min' 
                  }"></editor>          
            </div>
    
            <div class="form-group">
                <label class="formLabel">Reproduce Steps:</label>
                <editor formControlName="reproduceSteps" [init]="{
                    base_url: '/tinymce', 
                    suffix: '.min' 
                  }"></editor> 
            </div>
    
            <br>
            <div class="buttonGroup">
                <button type="button" class="btn btn-secondary">Cancel</button>
                <button type="submit" class="btn btn-success" (click)="submitReport()" [disabled]="bugForm.invalid">Submit for Review</button>
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
    '.modal{-webkit-box-align:center;align-items:center;background:rgba(25,25,25,0.9);bottom:0;display:flex;-webkit-box-pack:center;justify-content:center;left:0;overflow:auto;position:fixed;right:0;top:0;z-index:800;-webkit-animation-name:animatetop;-webkit-animation-duration:.4s;animation-name:animatetop;animation-duration:.4s}.modal-content{display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin:15px;max-height:80vh;min-width:0;z-index:800;text-align:left;width:1024px;background-color:#fff;border-radius:6px;box-shadow:0 1px 2px rgba(25,25,25,0.2);overflow:auto;padding:30px;position:relative}@-webkit-keyframes animatetop{from{top:-300px;opacity:0}to{top:0;opacity:1}}@keyframes animatetop{from{top:-300px;opacity:0}to{top:0;opacity:1}}.modal-header{padding:10px;color:white}.close{color:#3a3a3a;float:right;font-size:28px;font-weight:bold}.close:hover{cursor:pointer}.close:focus{color:#000}'
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

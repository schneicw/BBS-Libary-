import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import BugStatus from './models/BugStatus';
import { Application } from './models/Application';
import { BugReport } from './models/BugReport';

@Component({
  selector: 'lib-bug-lib',
  template: `
  <button (click) ="openBugReportModal()"> Click to add </button>
    

<div *ngIf ="reportModal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <span (click)="closeBugReportModal()" class="close">&times;</span>
        </div>
        <div class="modal-body-container">
            <div class="modal-body">
                <div class="modal-body-wrap">
                    <div class="body-column">
                        <div class="body-column-wrap">
                            <form [formGroup]="bugForm">
                                <div class="body-row">
                                    <label class="formLabel">
                                        Title
                                        <span> (required) </span>
                                    </label>   
                                    <div class="row-text-input">
                                        <label>
                                            <input class = "inputType" type="text" formControlName="title" required> 
                                        </label>
                                    </div>
                                </div>
                                <div class="body-row">
                                        <label class="formLabel">Application:</label>
                                        <select class="dropDown" formControlName="application">
                                            <option value="" disabled>Choose application</option>
                                            <option *ngFor="let application of applicationNameList" [ngValue]="application">{{application}}</option>
                                        </select>
                                </div>
                                <div class="body-row">
                                        <label class="formLabel">Suspected Location:</label>
                                        <input class = "inputType" type="text" formControlName="suspectedLocation">
                                </div>
                                <div class="body-row">
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
                                <div class="body-row">
                                        <label class="formLabel">Reporter:</label>
                                        <input class = "inputType" type="text" formControlName="reporter">
                                </div>
                                <div class="body-row">
                                        <label class="formLabel">Description:</label>
                                        <editor formControlName="description" required [init]="{
                                            base_url: '/tinymce', 
                                            suffix: '.min' 
                                        }"></editor>          
                                </div>
                                <div class="body-row">
                                        <label class="formLabel">Reproduce Steps:</label>
                                        <editor formControlName="reproduceSteps" [init]="{
                                            base_url: '/tinymce', 
                                            suffix: '.min' 
                                        }"></editor> 
                                </div>
                            </form> 
                                <p *ngIf="failToPost" class="warningPost">The bug failed to post. Please review the request</p>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
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
    </div>   
</div>
  `,
  styles: [
      '*{box-sizing:border-box;font-family:Roboto,"Helvetica Neue",sans-serif}.modal{-webkit-box-align:center;align-items:center;background:rgba(25,25,25,0.9);bottom:0;display:flex;-webkit-box-pack:center;justify-content:center;left:0;overflow:auto;position:fixed;right:0;top:0;z-index:800;animation-name:animateopacity;animation-duration:.4s}.modal-content{display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin:15px;max-height:80vh;min-width:0;z-index:800;text-align:left;width:1024px;background-color:#fff;border-radius:6px;box-shadow:0 1px 2px rgba(25,25,25,0.2);overflow:auto;padding:30px;position:relative;animation-name:animatesize;animation-duration:.5s}@keyframes animatesize{from{max-height:70vh;width:921.5px}to{max-height:80vh;width:1024px}}@keyframes animateopacity{from{opacity:0}to{opacity:1}}.modal-header{padding:10px;color:white;border-bottom:0}.close{color:#3a3a3a;float:right;font-size:28px;font-weight:bold}.close:hover{cursor:pointer}.close:focus{color:#000}.modal-action-buttons{margin-top:30px;text-align:right}.modal-cancel-btn{margin-left:auto;background:#fff;border-color:transparent;color:#696969;border:1px solid transparent;border-radius:100px;cursor:pointer;display:inline-block;font-weight:600;line-height:1;-webkit-transition-duration:300ms;transition-duration:300ms;-webkit-transition-property:color,background;transition-property:color,background;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.modal-submit-btn{margin-left:-5px;margin-right:5px;background:#74c687;border-color:transparent;color:#fff;border:1px solid transparent;border-radius:100px;cursor:pointer;display:inline-block;font-weight:600;line-height:1;-webkit-transition-duration:300ms;transition-duration:300ms;-webkit-transition-property:color,background;transition-property:color,background;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.modal-btn-label{padding:8px 18px;-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}.modal-btn-label-wrapper{font-size:14px;border:1px solid transparent;display:inline-block;max-width:100%}.modal-body-container{background-color:#fcfcfc;border:1px solid #e8e8e8;border-radius:3px;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;overflow:auto}.modal-body{border:0;width:100%;-webkit-box-flex:1;flex:1}.modal-body-wrap{padding:30px}' 
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
      
    constructor(private fb: FormBuilder) { }
    
    async submitReport(){
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
    
        // const result = await this.api.submitNewBugReport(report);
    
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

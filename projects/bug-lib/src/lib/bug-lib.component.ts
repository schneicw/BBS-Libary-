import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-bug-lib',
  template: `
    <button (click) ="openBugReportModal()"> Click to add </button>
    

    <div *ngIf ="reportModal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
            <span (click)="closeBugReportModal()" class="close">&times;</span>
        </div>
        <div class="modal-container>
          <div class="modal-body">
          <div class="info-column">
          <div class="info-column-wrap">
              <div class="info-column-row">
                  <label class="input-label">
                       Photo Title 
                      <span>(required)</span>
                  </label>
                  <div class="upload-input-field">
                      <label>
                          <input placeholder="Give the photo a title" id="photoName" type="text" name="photoName">
                      </label>
                  </div>
              </div>
              <div class="info-column-row">
                  <label class="input-label">
                       Photo Description 
                      <span>(required)</span>
                  </label>
                  <div class="upload-input-field">
                      <label>
                          <input id="photoDescription" type="text" name="photoDescription">
                      </label>
                  </div>
              </div>
              <div class="info-column-row">
                  <label class="input-label">
                       Tags 
                  </label>
                  <div class="upload-input-field">
                      <div id=createTags>
                          <label>
                              <input id="addTag" name="addTag" type="text" >
                              <button id="addTagButton"type="button">Add</button>
                          </label>
                      </div>
                  </div>
              </div>
              <div class="info-column-row">
                  <div class="upload-submit-field">
                      <button id="savePhotoButton"type="button">
                          <div>
                              <div>
                                  <span>
                                      Upload
                                  </span>
                              </div>
                          </div>
                      </button>
                  </div>
              </div>
          </div>
      </div>
          <div>
        </div>
      </div>   
    </div>
  `,
  styles: [ 
    '.modal{-webkit-box-align:center;align-items:center;background:rgba(25,25,25,0.9);bottom:0;display:flex;-webkit-box-pack:center;justify-content:center;left:0;overflow:auto;position:fixed;right:0;top:0;z-index:800;-webkit-animation-name:animatetop;-webkit-animation-duration:.4s;animation-name:animatetop;animation-duration:.4s}.modal-content{display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin:15px;max-height:80vh;min-width:0;z-index:800;text-align:left;width:1024px;background-color:#fff;border-radius:6px;box-shadow:0 1px 2px rgba(25,25,25,0.2);overflow:auto;padding:30px;position:relative}@-webkit-keyframes animatetop{from{top:-300px;opacity:0}to{top:0;opacity:1}}@keyframes animatetop{from{top:-300px;opacity:0}to{top:0;opacity:1}}.modal-header{padding:10px;color:white}.close{color:#3a3a3a;float:right;font-size:28px;font-weight:bold;&:hover{cursor:pointer}&:focus{color:#000}}'
  ]
})

export class BugLibComponent implements OnInit {

  // <span><img class="logo" src="http://bug-bounty-system.s3-website.us-east-2.amazonaws.com/Ladybug-128.png"> </span>
  reportModal:boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

  openBugReportModal(){
    this.reportModal = true;
  }

  closeBugReportModal(){
    this.reportModal = true;
  }
}

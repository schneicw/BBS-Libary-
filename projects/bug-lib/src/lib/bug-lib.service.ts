import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

//  schaud
// import {BugReport} from 'src/app/models/BugReport';
// import {Application} from 'src/app/models/Application';

import Application from 'projects/bug-lib/src/lib/models/application';
import BugReport from 'projects/bug-lib/src/lib/models//BugReport';
import Client from 'projects/bug-lib/src/lib/models/Client';
import Solution from 'projects/bug-lib/src/lib/models/Solution';

@Injectable({
  providedIn: 'root'
})
export class BugLibService {

  constructor(private http: HttpClient) { }

  path: string = 'http://localhost:9111';

  postApplication(appTitle:string,appLink:string):Promise<Application>{
    let appJson = {"id":0, "title":`${appTitle}`, "gitLink":`${appLink}`}
    return this.http.post<Application>(`${this.path}/applications/`, appJson).toPromise();
  }

  submitNewBugReport(bugReport: BugReport): Promise<BugReport>{
    return this.http.post<BugReport>(`${this.path}/bugreports`, bugReport).toPromise();
  }

  async getBugReports(): Promise<BugReport[]> {
    return await this.http.get<BugReport[]>(`${this.path}/bugreports`).toPromise();
  }
  
}

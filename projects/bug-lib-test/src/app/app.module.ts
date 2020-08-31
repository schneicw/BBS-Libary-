import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BugLibModule}   from 'bug-lib'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BugLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

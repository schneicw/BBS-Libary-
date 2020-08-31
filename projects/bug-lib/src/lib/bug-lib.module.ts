import { NgModule } from '@angular/core';
import { BugLibComponent } from './bug-lib.component';
import { CommonModule } from '@angular/common';  
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [BugLibComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [BugLibComponent]
})
export class BugLibModule { }

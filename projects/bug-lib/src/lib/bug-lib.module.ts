import { NgModule } from '@angular/core';
import { BugLibComponent } from './bug-lib.component';
import { CommonModule } from '@angular/common';  
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditorModule} from '@tinymce/tinymce-angular';




@NgModule({
  declarations: [BugLibComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    EditorModule
  ],
  exports: [BugLibComponent]
})
export class BugLibModule { }

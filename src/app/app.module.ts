import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentClassComponent } from './student-class/student-class.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentClassListComponent } from './student-class/student-class-list/student-class-list.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentClassComponent,
    StudentClassListComponent

  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatDialogModule, MatTableModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatFormFieldModule, MatInputModule } from '@angular/material'
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NavUserInfoComponent } from './nav-user-info/nav-user-info.component';
import { NoteFormComponent } from './note-form/note-form.component';
import { DateSelectorComponent } from './date-selector/date-selector.component';
import { IndividualComponent } from './individuals/component/individual.component';
import { IndividualDialogComponent } from './individuals/dialog/individual-dialog.component';
import {StaffComponent} from "./staff/component/staff.component";
import {StaffDialogComponent} from "./staff/dialog/staff-dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    LoginComponent,
    NavUserInfoComponent,
    NoteFormComponent,
    DateSelectorComponent,
    StaffComponent,
    IndividualComponent,
    IndividualDialogComponent,
    StaffDialogComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [IndividualDialogComponent]
})
export class AppModule { }

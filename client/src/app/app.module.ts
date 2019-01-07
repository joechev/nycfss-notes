import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
    MatDialogModule, MatTableModule, MatPaginatorModule, MatDatepickerModule, MatNativeDateModule,
    MatSortModule, MatProgressSpinnerModule, MatFormFieldModule, MatInputModule, MatTabsModule,
    MatSelectModule } from '@angular/material'
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
import { NotesComponent } from './notes/component/notes.component';
import { NotesDialogComponent } from './notes/dialog/notes-dialog.component';
import {StaffComponent} from "./staff/component/staff.component";
import {StaffDialogComponent} from "./staff/dialog/staff-dialog.component";
import {WINDOW_PROVIDERS} from "./shared/window-providers";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

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
    NotesComponent,
    NotesDialogComponent,
    StaffDialogComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule
  ],
  providers: [WINDOW_PROVIDERS],
  bootstrap: [AppComponent],
  entryComponents: [IndividualDialogComponent, NotesDialogComponent, StaffDialogComponent]
})
export class AppModule { }

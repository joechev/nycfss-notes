import {Component, OnInit, ViewChild} from '@angular/core';
import {Note} from "../note";
import {MatDatepickerInputEvent, MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {FormControl} from "@angular/forms";
import {WeeklySummaryService} from "../service/weekly-summary.service";
import {WeeklySummary} from "../weeklySummary";
import {HttpErrorResponse} from "@angular/common/http";
import {StaffService} from "../../staff/service/staff.service";
import {NotesDialogComponent} from "../dialog/notes-dialog.component";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  displayedColumns: string[] = ['serviceDate', 'individual', 'startTime', 'endTime'];
  summary: WeeklySummary;
  notes: Note[][];
  selectedDate: Date;
  dataSources: MatTableDataSource<Note>[];
  date: FormControl;
  serializedDate: FormControl;
  loading: boolean = true;
  selectedTab: number;

  constructor(private service: WeeklySummaryService, private dialog: MatDialog) {
      this.selectedDate = new Date();
      this.date = new FormControl(this.selectedDate);
      this.serializedDate = new FormControl((this.selectedDate).toISOString());
      this.notes = [[], [], [], [], [], [], []];
      this.dataSources = [];
      this.notes.forEach(note => this.dataSources.push(new MatTableDataSource<Note>(note)));
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
      this.service.findByDate(this.selectedDate).subscribe(
          resp => this.handleSummaryResponse(resp, this.selectedDate),
          error => this.handleNotFound(error, this.selectedDate));
  }

  selectDate(date: Date) {
      this.selectedDate = date;
      this.summary.notes.forEach(note => {
          this.notes[note.serviceDate.getDay()].push(note);
      });
      this.selectedTab = this.selectedDate.getDay();
      this.loading = false;
  }

  handleSummaryResponse(summary: WeeklySummary, date: Date) {
      this.summary = summary;
      this.selectDate(date);
  }

  handleNotFound(error: HttpErrorResponse, date: Date) {
      if(error.status == 404) {
          this.service
              .create(WeeklySummary.forDate(date))
              .subscribe(resp => {
                  this.service.linkToStaff(resp, StaffService.getMe());
                  this.handleSummaryResponse(resp, date);
              });
      }
  }

  dateChanged(event: MatDatepickerInputEvent<Date>) {
      const daysDiff = Math.abs(this.selectedDate.getDate() - event.value.getDate());
      if(daysDiff > 6) {
          this.loading = true;
          this.notes.forEach(n => n.length = 0);
          this.service.findByDate(event.value).subscribe(
              resp => this.handleSummaryResponse(resp, event.value),
              error => this.handleNotFound(error, event.value));
      } else if (daysDiff > 0) {
          this.selectedTab = event.value.getDay();
          this.selectedDate = event.value;
      }
  }

    openCreateDialog(): void {
        this.dialog.open(NotesDialogComponent, {data: Note.for(this.selectedDate)});
    }

}

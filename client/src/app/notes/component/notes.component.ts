import {Component, OnInit, ViewChild} from '@angular/core';
import {Note} from "../note";
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {FormControl} from "@angular/forms";
import {WeeklySummaryService} from "../service/weekly-summary.service";
import {WeeklySummary} from "../weeklySummary";
import {HttpErrorResponse} from "@angular/common/http";
import {StaffService} from "../../staff/service/staff.service";

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

  constructor(private service: WeeklySummaryService, private dialog: MatDialog) {
      this.date = new FormControl(new Date());
      this.serializedDate = new FormControl((new Date()).toISOString());
      this.notes = [[], [], [], [], [], [], []];
      this.dataSources = [];
      this.notes.forEach(note => this.dataSources.push(new MatTableDataSource<Note>(note)));
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
      const date = new Date();
      this.service.findByDate(date).subscribe(
          resp => this.handleSummaryResponse(resp, date),
          error => this.handleNotFound(error, date));
  }

  selectDate(date: Date) {
      this.selectedDate = date;
      this.summary.notes.forEach(note => {
          this.notes[note.serviceDate.getDay()].push(note);
      });
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

}

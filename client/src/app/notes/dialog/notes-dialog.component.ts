import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material";
import {Note} from "../note";
import {FormControl} from "@angular/forms";
import {Individual} from "../../individuals/individual";
import {IndividualService} from "../../individuals/service/individual.service";
import {EnrollmentService} from "../../individuals/service/enrollment.service";

@Component({
  selector: 'app-notes-dialog',
  templateUrl: './notes-dialog.component.html',
  styleUrls: ['./notes-dialog.component.css']
})
export class NotesDialogComponent implements OnInit {

    date: FormControl;
    serializedDate: FormControl;
    startTimeFormControl: FormControl;
    endTimeFormControl: FormControl;
    individuals: Individual[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: Note, private service: EnrollmentService) {
      this.date = new FormControl(data.serviceDate);
      this.serializedDate = new FormControl((data.serviceDate).toISOString());
      this.startTimeFormControl = new FormControl();
      this.endTimeFormControl = new FormControl();
  }

  ngOnInit(): void {
      this.service.findByProgramId()
  }



}

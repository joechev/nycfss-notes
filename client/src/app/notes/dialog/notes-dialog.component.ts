import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material";
import {Note} from "../note";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-notes-dialog',
  templateUrl: './notes-dialog.component.html',
  styleUrls: ['./notes-dialog.component.css']
})
export class NotesDialogComponent {

    date: FormControl;
    serializedDate: FormControl;
    startTime: FormControl;
    endTime: FormControl;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Note) {
      this.date = new FormControl(data.serviceDate);
      this.serializedDate = new FormControl((data.serviceDate).toISOString());
      this.startTime = new FormControl();
      this.endTime = new FormControl();
  }

}

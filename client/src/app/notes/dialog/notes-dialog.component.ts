import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material";
import {Note} from "../note";

@Component({
  selector: 'app-notes-dialog',
  templateUrl: './notes-dialog.component.html',
  styleUrls: ['./notes-dialog.component.css']
})
export class NotesDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Note) { }

}

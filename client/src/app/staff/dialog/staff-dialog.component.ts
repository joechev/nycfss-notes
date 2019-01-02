import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material";
import {Staff} from "../staff";

@Component({
  selector: 'app-staff-dialog',
  templateUrl: './staff-dialog.component.html',
  styleUrls: ['./staff-dialog.component.css']
})
export class StaffDialogComponent {

    constructor(@Inject(MAT_DIALOG_DATA) public data: Staff) { }

}

import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material";
import {Individual} from "../individual";

@Component({
  selector: 'app-individual-dialog',
  templateUrl: './individual-dialog.component.html',
  styleUrls: ['./individual-dialog.component.css']
})
export class IndividualDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Individual) { }

}

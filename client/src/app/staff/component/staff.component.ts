import {Component, OnInit, ViewChild} from '@angular/core';
import 'datatables.net';
import 'datatables.net-bs4';
import {merge} from "rxjs";
import {EntityDataSource} from "../../shared/domain/entity-data-source";
import {Staff} from "../staff";
import {StaffService} from "../service/staff.service";
import {MatDialog, MatPaginator, MatSort} from "@angular/material";
import {PageRequest} from "../../shared/domain/page-request";
import {tap} from "rxjs/operators";
import {StaffDialogComponent} from "../dialog/staff-dialog.component";

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

    displayedColumns: string[] = ['firstName', 'middleName', 'lastName'];
    dataSource: EntityDataSource<Staff, StaffService>;

    constructor(private service: StaffService, private dialog: MatDialog) {}

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    ngOnInit() {
        this.dataSource = new EntityDataSource(this.service);
        this.dataSource.loadData(PageRequest.default('staff'));
    }

    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        merge(this.sort.sortChange, this.paginator.page)
            .pipe(tap(()=> this.loadData()))
            .subscribe();
    }

    loadData() {
        this.dataSource.loadData(PageRequest.fromTable(
            'staff',
            this.paginator,
            this.sort));
    }

    loadStaff(row: Staff = new Staff()) {
        this.dialog.open(StaffDialogComponent, {data: row});
    }

}

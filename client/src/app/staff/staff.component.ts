import { Component, OnInit } from '@angular/core';
import 'datatables.net';
import 'datatables.net-bs4';
import * as $ from 'jquery';
import {HttpClient} from "@angular/common/http";
import {Subscription} from "rxjs";
import {DataService} from "../shared/data.service";

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

    staff: Object[];
    table: any;
    sub: Subscription;

    constructor(private ds: DataService) { }

    ngOnInit() {
        this.table = $('#staff-table').DataTable({
            serverSide: true,
            ajax: (dtOptions: any, callback) => {
                this.sub = this.ds.search('staff', dtOptions).subscribe(
                    resp => {
                        this.staff = resp['_embedded']['staff'];
                        callback({
                            recordsTotal: resp['page']['totalElements'],
                            recordsFiltered: resp['page']['totalElements'],
                            data: [],
                        });
                    },
                    err => {},
                    () => {
                        this.table.columns.adjust();
                        this.sub.unsubscribe();
                    });
            },
            columnDefs: [
                {name: 'firstName', targets: 0},
                {name: 'middleName', targets: 1},
                {name: 'lastName', targets: 2},
                {name: 'email', targets: 3},
            ],
            destroy: true,
            paging: true,
            info: true,
            autoWidth: true,
            responsive: true,
            lengthMenu: [25, 50, 100],
            scrollY: '600',
            scrollX: true
        });
    }

}

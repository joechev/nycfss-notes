import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Individual} from "../individual";
import {IndividualService} from "../service/individual.service";
import {merge} from "rxjs";
import {MatDialog, MatPaginator, MatSort} from "@angular/material";
import {tap} from "rxjs/operators";
import {IndividualDialogComponent} from "../dialog/individual-dialog.component";
import {EntityDataSource} from "../../shared/domain/entity-data-source";
import {PageRequest} from "../../shared/domain/page-request";

@Component({
  selector: 'app-individuals',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['firstName', 'middleName', 'lastName'];
  dataSource: EntityDataSource<Individual, IndividualService>;

  constructor(private service: IndividualService, private dialog: MatDialog) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
      this.dataSource = new EntityDataSource(this.service);
      this.dataSource.loadData(PageRequest.default('individuals'));
  }

  ngAfterViewInit() {
      this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
      merge(this.sort.sortChange, this.paginator.page)
          .pipe(tap(()=> this.loadData()))
          .subscribe();
  }

  loadData() {
      this.dataSource.loadData(PageRequest.fromTable(
          'individuals',
          this.paginator,
          this.sort));
  }

  loadIndividual(row: Individual = new Individual()) {
      this.dialog.open(IndividualDialogComponent, {data: row});
  }

}

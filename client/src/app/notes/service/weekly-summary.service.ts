import {Injectable} from '@angular/core';
import {DomainService} from "../../shared/domain/domain-service";
import {IDomainService} from "../../shared/domain/idomain-service";
import {ApiService} from "../../shared/api.service";
import {EntityDeserializerImpl} from "../../shared/domain/entity-deserializer-impl";
import {WeeklySummary} from "../weeklySummary";
import {PageRequest} from "../../shared/domain/page-request";
import {Observable} from "rxjs";
import {EntityList} from "../../shared/domain/entity-list";
import {HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Staff} from "../../staff/staff";
import {OneToOneRelationship} from "../../shared/domain/one-to-one-relationship";

@Injectable({
  providedIn: 'root'
})
export class WeeklySummaryService extends DomainService<WeeklySummary> implements IDomainService<WeeklySummary> {

  constructor(api: ApiService) {
    super(api, new EntityDeserializerImpl(WeeklySummary));
  }

  resource(): string {
    return "summaries";
  }

  search(pageRequest: PageRequest): Observable<EntityList<WeeklySummary>> {
    return super.search(pageRequest.withProjection('withNotes'));
  }

  findByDate(date: Date): Observable<WeeklySummary> {
    return this.api.findOneQuery(
        this.resource(),
        'findByStaffIdAndWeekOf',
        WeeklySummaryService.weekOfParam(date))
        .pipe(map(resp => this.deserializer.deserialize(resp)));
  }

  linkToStaff(summary: WeeklySummary, staff: Staff) {
    let er = new OneToOneRelationship<WeeklySummary, Staff>(summary, 'staff', staff);
    this.api.link(er);
  }

  static weekOfParam(date: Date): HttpParams {
      if(date.getDay() != 0) {
          date.setDate(date.getDate() - date.getDay());
      }
      return new HttpParams()
          .set('weekOf', date.toISOString().substr(0, 10))
          .set('staffId', localStorage.getItem('userId'));
  }

}

import {Injectable} from '@angular/core';
import {Enrollment} from "../enrollment";
import {DomainService} from "../../shared/domain/domain-service";
import {IDomainService} from "../../shared/domain/idomain-service";
import {ApiService} from "../../shared/api.service";
import {EntityDeserializerImpl} from "../../shared/domain/entity-deserializer-impl";
import {Observable} from "rxjs";
import {PageRequest} from "../../shared/domain/page-request";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService extends DomainService<Enrollment> implements IDomainService<Enrollment> {

  constructor(api: ApiService) {
    super(api, new EntityDeserializerImpl(Enrollment));
  }

  resource(): string {
    return "enrollments";
  }

  findByProgramId(id: string): Observable<Enrollment[]> {
      return this.search(PageRequest
              .findAll(this.resource(), 'individual.lastName,asc')
              .withQuery('findByProgramId', {programId: id})
              .withProjection('enrolledIndividual'))
          .pipe(map(resp => resp.entityList().filter(e => e.isActive())));
  }

}

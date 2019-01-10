import {Injectable} from '@angular/core';
import {DomainService} from "../../shared/domain/domain-service";
import {IDomainService} from "../../shared/domain/idomain-service";
import {Program} from "../program";
import {EntityDeserializerImpl} from "../../shared/domain/entity-deserializer-impl";
import {ApiService} from "../../shared/api.service";
import {Enrollment} from "../../individuals/enrollment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProgramService extends DomainService<Program> implements IDomainService<Program> {

  constructor(api: ApiService) {
      super(api, new EntityDeserializerImpl(Program));
  }

    resource(): string {
        return "programs";
    }

}

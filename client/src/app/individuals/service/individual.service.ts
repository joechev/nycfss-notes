import {Injectable} from '@angular/core';
import {Individual} from "../individual";
import {DomainService} from "../../shared/domain/domain-service";
import {IDomainService} from "../../shared/domain/idomain-service";
import {ApiService} from "../../shared/api.service";
import {EntityDeserializerImpl} from "../../shared/domain/entity-deserializer-impl";

@Injectable({
  providedIn: 'root'
})
export class IndividualService extends DomainService<Individual> implements IDomainService<Individual> {

  constructor(api: ApiService) {
    super(api, new EntityDeserializerImpl(Individual));
  }

  resource(): string {
    return "individuals";
  }

}

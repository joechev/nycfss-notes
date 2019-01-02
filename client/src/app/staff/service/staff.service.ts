import { Injectable } from '@angular/core';
import {DomainService} from "../../shared/domain/domain-service";
import {Staff} from "../staff";
import {IDomainService} from "../../shared/domain/idomain-service";
import {ApiService} from "../../shared/api.service";
import {EntityDeserializerImpl} from "../../shared/domain/entity-deserializer-impl";

@Injectable({
  providedIn: 'root'
})
export class StaffService extends DomainService<Staff> implements IDomainService<Staff> {

  constructor(api: ApiService) {
    super(api, new EntityDeserializerImpl(Staff));
  }

  resource(): string {
    return "staff";
  }



}

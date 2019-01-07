import { Injectable } from '@angular/core';
import {DomainService} from "../../shared/domain/domain-service";
import {Staff} from "../staff";
import {IDomainService} from "../../shared/domain/idomain-service";
import {ApiService} from "../../shared/api.service";
import {EntityDeserializerImpl} from "../../shared/domain/entity-deserializer-impl";
import {Observable} from "rxjs";
import {HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class StaffService extends DomainService<Staff> implements IDomainService<Staff> {

  constructor(api: ApiService) {
    super(api, new EntityDeserializerImpl(Staff));
  }

  findByEmail(email: string): Observable<Staff> {
    return this.api.findOneQuery(
            'staff',
            'findByEmail',
            new HttpParams().set('email', email))
        .pipe(map(resp => this.deserializer.deserialize(resp)));
  }

  resource(): string {
    return "staff";
  }

  static getMe(): Staff {
    let me = new Staff();
    me.id = localStorage.getItem('userId');
    return me;
  }

}

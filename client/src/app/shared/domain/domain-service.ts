import {DomainEntity} from "./domain-entity";
import {IDomainService} from "./idomain-service";
import {Observable} from "rxjs";
import {PageRequest} from "./page-request";
import {EntityList} from "./entity-list";
import {EntityDeserializer} from "./entity-deserializer";
import {map} from "rxjs/operators";
import {ApiService} from "../api.service";

export abstract class DomainService<T extends DomainEntity> implements IDomainService<T> {

  protected constructor(private api: ApiService, private deserializer: EntityDeserializer<T>) {}

  abstract resource(): string;

  findOne(id: string): Observable<T> {
    return this.api
        .findOne(this.resource(), id)
        .pipe(map(resp => this.deserializer.deserialize(resp)));
  }

  search(pageRequest: PageRequest): Observable<EntityList<T>> {
    return this.api
        .search(pageRequest)
        .pipe(map(resp => this.deserializer.deserializeList(resp)));
  }

  create(entity: T): Observable<T> {
    return this.api.create(entity);
  }

  update(entity: T): Observable<T> {
    return this.api.update(entity);
  }

  delete(entity: T): void {
    this.api.delete(entity);
  }

}

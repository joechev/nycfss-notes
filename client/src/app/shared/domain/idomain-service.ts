import {DomainEntity} from "./domain-entity";
import {Observable} from "rxjs";
import {EntityList} from "./entity-list";
import {PageRequest} from "./page-request";

export interface IDomainService<T extends DomainEntity> {

    findOne(id: string): Observable<T>
    search(pageRequest: PageRequest): Observable<EntityList<T>>
    create(entity: T): Observable<T>
    update(entity: T): Observable<T>
    delete(entity: T): void

}

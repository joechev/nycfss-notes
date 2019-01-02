import {DataSource} from "@angular/cdk/table";
import {DomainEntity} from "./domain-entity";
import {DomainService} from "./domain-service";
import {CollectionViewer} from "@angular/cdk/collections";
import {BehaviorSubject, Observable} from "rxjs";
import {PageRequest} from "./page-request";

export class EntityDataSource<E extends DomainEntity, S extends DomainService<E>> implements DataSource<E> {

    private subject = new BehaviorSubject<E[]>([]);
    private loading = new BehaviorSubject<boolean>(false);

    constructor(private service: S) {};

    connect(collectionViewer: CollectionViewer): Observable<E[]> {
        return this.subject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.subject.complete();
        this.loading.complete();
    }

    loadData(pageRequest: PageRequest) {
        this.loading.next(true);
        this.service.search(pageRequest).subscribe(
            response => this.subject.next(response.entityList()),
            err => this.subject.next([]),
            () => this.loading.next(false));
    }

}

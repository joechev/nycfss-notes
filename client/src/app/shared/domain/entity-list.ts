import {DomainEntity} from "./domain-entity";
import {Page} from "./page";

export class EntityList<T extends DomainEntity> {

    page: Page;

    constructor(
        private _embedded: T[],
        private _links: Object,
        page: Page) {
        this.page = page;
    }

    entityList(): T[] {
        return this._embedded;
    }

    links(): any {
        return this._links;
    }

    next(): string {
        return this._links['next']['href'];
    }

    prev(): string {
        return this._links['prev']['href'];
    }

}

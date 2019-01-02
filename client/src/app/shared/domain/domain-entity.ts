export abstract class DomainEntity {

    id: string;
    creTimest: string;
    modTimest: string;
    active: boolean;
    _links: Object;

    location(): string {
      if(this._links != null && this._links['self'] != null) {
        return this._links['self']['href'];
      }
      return '/api/' + this.resourceName() + '/' + this.id;
    }

    delete(): void {
      this.active = false;
    }

    defaultSort(): string {
      return 'id,asc';
    }

    abstract resourceName(): string;

}

import {DomainEntity} from "./domain-entity";
import {EntityRelationship} from "./entity-relationship";

export class OneToOneRelationship<P extends DomainEntity, C extends DomainEntity> extends EntityRelationship<P, C> {

  constructor(parent: P, path: string, private child: C) {
    super(parent, path);
  }

  toBody(host: string): string {
    return `${host}${this.child.location()}`;
  }

  deletePath(): string {
    return super.relPath();
  }

}

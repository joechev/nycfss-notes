import {DomainEntity} from "./domain-entity";
import {EntityRelationship} from "./entity-relationship";

export class OneToOneRelationship<P extends DomainEntity, C extends DomainEntity> extends EntityRelationship<P, C> {

  constructor(parent: P, private child: C, private path: string) {
    super(parent);
  }

  toBody(): string {
    return this.child.location();
  }

  deletePath(): string {
    return super.parentLoc() + '/' + this.path;
  }

}

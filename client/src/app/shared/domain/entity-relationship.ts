import {DomainEntity} from "./domain-entity";

export abstract class EntityRelationship<P extends DomainEntity, C extends DomainEntity> {

  protected constructor(private parent: P) {}

  abstract toBody(): string;
  abstract deletePath(): string;

  parentLoc(): string {
    return this.parent.location();
  }

}

import {DomainEntity} from "./domain-entity";

export abstract class EntityRelationship<P extends DomainEntity, C extends DomainEntity> {

  protected constructor(private parent: P, private rel: string) {}

  abstract toBody(host: string): string;
  abstract deletePath(): string;

  relPath(): string {
    return `${this.parent.location()}/${this.rel}`;
  }

}

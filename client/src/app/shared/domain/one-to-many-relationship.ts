import {DomainEntity} from "./domain-entity";
import {EntityRelationship} from "./entity-relationship";

export class OneToManyRelationship<P extends DomainEntity, C extends DomainEntity> extends EntityRelationship<P, C> {

  toDelete: C;

  constructor(parent: P, path: string, private children: C[]) {
    super(parent, path);
  }

  toBody(host: string): string {
    return this.children.map(c => `${host}${c.location()}`).join('\n');
  }

  delete(child: C): OneToManyRelationship<P, C> {
    this.toDelete = child;
    return this;
  }

  deletePath(): string {
    let base = super.relPath();
    if(this.toDelete != null) {
      return base + '/' + this.toDelete.id;
    } else if(this.children.length === 1) {
      return base + '/' + this.children[0].id;
    } else {
      return base;
    }
  }

}

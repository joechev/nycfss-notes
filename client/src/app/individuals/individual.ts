import {DomainEntity} from "../shared/domain/domain-entity";

export class Individual extends DomainEntity {

  firstName: string;
  middleName: string;
  lastName: string;

  resourceName(): string {
    return "individuals";
  }

  lastNameFirst(): string {
      return `${this.lastName}, ${this.firstName}`;
  }

}

import {DomainEntity} from "../shared/domain/domain-entity";
import {Individual} from "../individuals/individual";

export class Note extends DomainEntity {

  individual: Individual;
  serviceDate: Date;
  startTime: string;
  endTime: string;

  resourceName(): string {
    return "notes";
  }

  lastNameFirst(): string {
    return `${this.individual.lastName}, ${this.individual.firstName}`;
  }

}

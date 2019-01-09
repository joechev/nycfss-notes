import {DomainEntity} from "../shared/domain/domain-entity";
import {Individual} from "../individuals/individual";

export class Enrollment extends DomainEntity {

    individual: Individual;
    startDate: Date;
    endDate: Date;

    resourceName(): string {
        return "enrollments";
    }

    isActive(): boolean {
        return this.endDate == null;
    }

}

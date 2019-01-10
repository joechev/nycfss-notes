import {DomainEntity} from "../shared/domain/domain-entity";
import {Staff} from "../staff/staff";
import {Enrollment} from "./enrollment";

export class Program extends DomainEntity {

    director: Staff;
    longName: string;
    shortName: string;
    minsPerUnit: number;
    enrollments: Enrollment[];

    resourceName(): string {
        return "programs";
    }

}

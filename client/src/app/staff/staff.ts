import {DomainEntity} from "../shared/domain/domain-entity";
import {Program} from "../programs/program";

export class Staff extends DomainEntity {

    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    program: Program;

    resourceName(): string {
        return 'staff';
    }

}

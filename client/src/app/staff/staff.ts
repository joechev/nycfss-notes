import {DomainEntity} from "../shared/domain/domain-entity";

export class Staff extends DomainEntity {

    firstName: string;
    middleName: string;
    lastName: string;
    email: string;

    resourceName(): string {
        return 'staff';
    }

}

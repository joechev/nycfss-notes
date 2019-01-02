import {DomainEntity} from "./domain-entity";
import {EntityList} from "./entity-list";

export interface EntityDeserializer<T extends DomainEntity> {

    deserialize(json: any): T;
    deserializeList(json: any): EntityList<T>;

}

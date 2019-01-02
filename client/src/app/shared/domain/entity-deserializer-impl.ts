import {DomainEntity} from "./domain-entity";
import {EntityDeserializer} from "./entity-deserializer";
import {EntityList} from "./entity-list";

export class EntityDeserializerImpl<T extends DomainEntity> implements EntityDeserializer<T> {

    constructor(private EntityType: new () => T) {}

    deserialize(json: any): T {
        let entity = new this.EntityType();
        Object.assign(entity, json);
        return entity;
    }

    deserializeList(json: any): EntityList<T> {
        let embedded = json._embedded;
        let jsonList = embedded[Object.keys(embedded)[0]] as any[];
        return new EntityList<T>(
            jsonList.map(jsonItem => this.deserialize(jsonItem)),
            json._links,
            json.page);
    }



}

import {Injectable} from '@angular/core';
import {Note} from "../note";
import {DomainService} from "../../shared/domain/domain-service";
import {IDomainService} from "../../shared/domain/idomain-service";
import {ApiService} from "../../shared/api.service";
import {EntityDeserializerImpl} from "../../shared/domain/entity-deserializer-impl";

@Injectable({
  providedIn: 'root'
})
export class NotesService extends DomainService<Note> implements IDomainService<Note> {

  constructor(api: ApiService) {
    super(api, new EntityDeserializerImpl(Note));
  }

  resource(): string {
    return "notes";
  }

}

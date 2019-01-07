import {DomainEntity} from "../shared/domain/domain-entity";
import {Note} from "./note";

export class WeeklySummary extends DomainEntity {

  weekOf: Date;
  notes: Note[];

  resourceName(): string {
    return "summaries";
  }

  static forDate(date: Date): WeeklySummary {
      let toRet = new WeeklySummary();
      date.setDate(date.getDate() - date.getDay());
      toRet.weekOf = date;
      return toRet;
  }

}

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {DomainEntity} from "./domain/domain-entity";
import {EntityRelationship} from "./domain/entity-relationship";
import {PageRequest} from "./domain/page-request";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  opts: Object;

  constructor(private http: HttpClient) {
      let headers = new HttpHeaders();
      headers.set('Content-Type', 'text/uri-list');
      this.opts = {headers: headers};
  }

  create<T extends DomainEntity>(entity: T): Observable<T> {
    return this.http.post<T>('/api/' + entity.resourceName(), entity);
  }

  update<T extends DomainEntity>(entity: T): Observable<T> {
    return this.http.put<T>(entity.location(), entity);
  }

  delete<T extends DomainEntity>(entity: T): Observable<T> {
    entity.delete();
    return this.http.put<T>(entity.location(), entity);
  }

  link<P extends DomainEntity, C extends DomainEntity>(rel: EntityRelationship<P, C>): Observable<any> {
    return this.http.put(rel.parentLoc(), rel.toBody(), this.opts);
  }

  unlink<P extends DomainEntity, C extends DomainEntity>(rel: EntityRelationship<P, C>): Observable<any> {
    return this.http.delete(rel.deletePath(), this.opts);
  }

  findOne(resource: string, id: string): Observable<any> {
    return this.http.get(`/api/${resource}/${id}`.toString());
  }

  search(pageRequest: PageRequest): Observable<any> {
    return this.http.get(pageRequest.getUrl(), { params: pageRequest.toHttpParams() });
  }

}

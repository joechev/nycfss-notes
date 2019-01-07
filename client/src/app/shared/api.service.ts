import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {DomainEntity} from "./domain/domain-entity";
import {EntityRelationship} from "./domain/entity-relationship";
import {PageRequest} from "./domain/page-request";
import {WINDOW} from "./window-providers";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, @Inject(WINDOW) private window: Window) { }

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

  link<P extends DomainEntity, C extends DomainEntity>(rel: EntityRelationship<P, C>) {
    return this.http.put(
                rel.relPath(),
                rel.toBody(this.getHost()),
                {headers: new HttpHeaders({'Content-Type': 'text/uri-list'})})
        .subscribe(resp => {});
  }

  unlink<P extends DomainEntity, C extends DomainEntity>(rel: EntityRelationship<P, C>): Observable<any> {
    return this.http.delete(
        rel.deletePath(),
        {headers: new HttpHeaders({'Content-Type': 'text/uri-list'})});
  }

  findOne(resource: string, id: string): Observable<any> {
    return this.http.get(`/api/${resource}/${id}`.toString());
  }

  findOneQuery(resource: string, query: string, params: HttpParams): Observable<any> {
    return this.http.get(`/api/${resource}/search/${query}`.toString(), { params: params });
  }

  search(pageRequest: PageRequest): Observable<any> {
    return this.http.get(pageRequest.getUrl(), { params: pageRequest.toHttpParams() });
  }

  findChildren(resource: string, id: string, childRel: string): Observable<any> {
    return this.http.get(`/api/${resource}/${id}/${childRel}`)
  }

  getHost(): string {
    return `${this.window.location.protocol}//${this.window.location.host}`;
  }

}

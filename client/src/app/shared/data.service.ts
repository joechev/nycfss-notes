import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  search(resource: string, dtOptions: any): Observable<Object> {
      return this.http.get("/api/" + resource, { params: this.buildHttpParams(dtOptions) });
  }

  buildHttpParams(dtOptions: any): HttpParams {
      let params = new HttpParams()
          .set('page', DataService.parsePage(dtOptions))
          .set('size', DataService.parseSize(dtOptions));
      let sorts = DataService.parseSort(dtOptions);
      sorts.forEach(s => params = params.set('sort', s));
      return params;
  }

  static parsePage(dtOptions: any): string {
      if(dtOptions.start < dtOptions.length) {
          return "0";
      }
      return "" + (dtOptions.start / dtOptions.length);
  }

  static parseSort(dtOptions: any): string[] {
      if(!dtOptions.order || dtOptions.order == []) {
          dtOptions.order = [{column: 0, dir: 'asc'}];
      }
      let orders = dtOptions.order as Object[];
      let cols = dtOptions.columns as Object[];
      return orders.map(o => cols[o['column'] as number]['name'] + ',' + o['dir']);
  }

  static parseSize(dtOptions: any): string {
      return "" + dtOptions.length;
  }

}

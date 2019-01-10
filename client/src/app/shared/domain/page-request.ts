import {HttpParams} from "@angular/common/http";
import {MatPaginator, Sort} from "@angular/material";

export class PageRequest {

  projection: string;
  query: string;
  queryParams: Object;

  constructor(
    private resource: string,
    private page: string,
    private size: string,
    private sort: string) {}

  getUrl(): string {
    if(this.query != null) {
        return `/api/${this.resource}/search/${this.query}`;
    }
    return `/api/${this.resource}`;
  }

  toHttpParams(): HttpParams {
      let toRet = new HttpParams()
          .set('page', this.page)
          .set('size', this.size)
          .set('sort', this.sort);
      if(this.projection != null) {
          toRet = toRet.set('projection', this.projection);
      }
      if(this.query != null) {
          Object.keys(this.queryParams)
              .forEach(key => toRet.set(key, this.queryParams[key]));
      }
      return toRet;
  }

  withProjection(projection: string): PageRequest {
      this.projection = projection;
      return this;
  }

  withQuery(query: string, queryParams?: Object): PageRequest {
      this.query = query;
      this.queryParams = queryParams;
      return this;
  }

    static parsePage(dtOptions: any): string {
        if(dtOptions.start < dtOptions.length) {
            return "0";
        }
        return "" + (dtOptions.start / dtOptions.length);
    }

    static parseSort(dtOptions: any): string {
        if(!dtOptions.order || dtOptions.order == []) {
            dtOptions.order = [{column: 0, dir: 'asc'}];
        }
        let orders = dtOptions.order as Object[];
        let o = orders[0];
        let cols = dtOptions.columns as Object[];
        return `${cols[o['column'] as number]['name']},${o['dir']}`.toString();
    }

    static parseSize(dtOptions: any): string {
        return "" + dtOptions.length;
    }

  static fromTable(resource: string, paginator: MatPaginator, sort: Sort): PageRequest {
    return new PageRequest(
        resource,
        `${paginator.pageIndex}`,
        `${paginator.pageSize}`,
        `${sort.active},${sort.direction}`);
  }

  static default(resource: string): PageRequest {
    return new PageRequest(resource, '0', '25', 'id,asc');
  }

  static findAll(resource: string, sort?: string): PageRequest {
      if(!sort) {
          sort = 'id,asc'
      }
      return new PageRequest(resource, '0', '1000', sort);
  }

}

import {HttpParams} from "@angular/common/http";
import {MatPaginator, Sort} from "@angular/material";

export class PageRequest {

  constructor(
    private resource: string,
    private page: string,
    private size: string,
    private sort: string) {}

  getUrl(): string {
    return `/api/${this.resource}`.toString();
  }

  toHttpParams(): HttpParams {
      return new HttpParams()
          .set('page', this.page)
          .set('size', this.size)
          .set('sort', this.sort);
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

}

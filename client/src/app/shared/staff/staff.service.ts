import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http: HttpClient) { }

  findByEmail(email: string) : Observable<Object> {
      return this.http.get(`api/staff/${email}`)
  }

}

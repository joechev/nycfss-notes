import { Injectable } from '@angular/core';
import { StaffService } from "../shared/staff/staff.service";
import {Observable, of} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private staffService: StaffService) {
      this.isAuthenticated();
  }

  isAuthenticated(): Observable<boolean> {
      return this.staffService.findByEmail('me').pipe(
          map(response => {
              if (response['authenticated']) {
                  const details = response['userAuthentication']['details'];
                  localStorage.setItem('email', details['email']);
                  localStorage.setItem('firstName', details['given_name']);
                  localStorage.setItem('lastName', details['family_name']);
                  localStorage.setItem('picture', details['picture']);
                  return true;
              } else {
                  return false;
              }
          }),
          catchError(error => { return of(false) })
      );

  }

}

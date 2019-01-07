import {Injectable} from '@angular/core';
import {Observable, of, Subscription} from "rxjs";
import {StaffService} from "../staff/service/staff.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  sub: Subscription;

  constructor(private staffService: StaffService) {
      this.isAuthenticated();
  }

  isAuthenticated(): Observable<boolean> {
      this.sub = this.staffService.findByEmail('jchiavaroli@nycfss.org').subscribe(
          resp => localStorage.setItem('userId', resp.id),
          err => {},
          () => this.sub.unsubscribe());
      return of(true);
      // return this.staffService.findOne('me').pipe(
      //     map(response => {
      //         if (response['authenticated']) {
      //             const details = response['userAuthentication']['details'];
      //             localStorage.setItem('email', details['email']);
      //             localStorage.setItem('firstName', details['given_name']);
      //             localStorage.setItem('lastName', details['family_name']);
      //             localStorage.setItem('picture', details['picture']);
      //             return true;
      //         } else {
      //             return false;
      //         }
      //     }),
      //     catchError(error => { return of(false) })
      // );

  }

}

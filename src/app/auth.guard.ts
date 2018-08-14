import { Injectable }  from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import { AuthService } from "./auth/auth.service";
import {concatMap} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.auth.isAuthenticated().pipe(concatMap(loggedIn => {
            if (!loggedIn) {
                this.router.navigate(['/login'])
            }
            return of(loggedIn);
        }));
    }

}
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { DashboardComponent }    from "./dashboard/dashboard.component";
import { LoginComponent }        from "./login/login.component";
import { AuthGuard }             from "./auth.guard";
import { IndividualComponent } from "./individuals/component/individual.component";
import {StaffComponent} from "./staff/component/staff.component";

const appRoutes: Routes = [
    { path: 'login',     component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'staff', component: StaffComponent, canActivate: [AuthGuard] },
    { path: 'individuals', component: IndividualComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
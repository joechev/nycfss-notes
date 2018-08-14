import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { DashboardComponent }    from "./dashboard/dashboard.component";
import { LoginComponent }        from "./login/login.component";
import { AuthGuard }             from "./auth.guard";

const appRoutes: Routes = [
    { path: 'login',     component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
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
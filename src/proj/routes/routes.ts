import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
//#childroutes
import { ChildRoutes } from './childroutes'
//#Components
import { Home } from '../components/home/home.component'
import { Signup } from '../components/user/signup.component'
import { Signin } from '../components/user/signin.component'
import { dashboard } from '../components/dashboard/dashboard.component'
import { Settings } from '../components/settings/setting.component'
export module Router {
    const routes: Routes = [
        { path: 'signup', component: Signup.SgninupComponent },
        { path: 'signin', component: Signin.SigninComponent },
        { path: 'dashboard', component: dashboard.dashboardComponent, children: ChildRoutes.dashboardChild },
        { path: 'settings', component: Settings.SettingComponent },
        { path: '', component: Home.HomeComponent },
        { path: '**', redirectTo: '/', pathMatch: "full" }
    ];
    @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
    export class RouteConfig { }
}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
//#Routes
import { Router } from './routes/routes'
//#components
import { Home } from './components/home/home.component'
import { Signup } from './components/user/signup.component'
import { Signin } from './components/user/signin.component'
import { dashboard } from './components/dashboard/dashboard.component'
import { AddContact } from './components/dashboard/contacts/addcontact.component'
import { ContactList } from './components/dashboard/contacts/contactlist.component'
//#services
export module Module {
    @NgModule({
        exports: [BrowserModule],
        imports: [CommonModule, FormsModule, ReactiveFormsModule, Router.RouteConfig],
        declarations: [
            Home.HomeComponent,
            Signup.SgninupComponent,
            Signin.SigninComponent,
            dashboard.dashboardComponent,
            AddContact.AddContactComponent,
            ContactList.ContactListComponent
        ],
        bootstrap: [Home.HomeComponent]
    })
    export class MainModule { }
}
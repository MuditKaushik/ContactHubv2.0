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
import { FilesList } from './components/dashboard/files/filelist.component'
import { ShareFiles } from './components/dashboard/files/sharedfiles.component'
import { Settings } from './components/settings/setting.component'
import { CreateFile } from './components/dashboard/files/createfile.component'

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
            ContactList.ContactListComponent,
            FilesList.FileListComponent,
            ShareFiles.ShareFilesComponent,
            Settings.SettingComponent,
            CreateFile.CreateFileComponent
        ],
        bootstrap: [Home.HomeComponent]
    })
    export class MainModule { }
}
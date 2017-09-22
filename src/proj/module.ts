//#Modules
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgbModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap'
import { HttpModule } from '@angular/http'
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
import { ModalPopup } from './components/common/modalPopup/modalpopup.component'
import { Loader } from './components/common/modalPopup/loader.component'
import { ContactSearch } from './components/dashboard/contacts/searchcontacts.component'
import { ContactResult } from './components/dashboard/contacts/contactresult.component'
//#services
//import { CKEditorModule } from 'ng2-ckeditor'
import { RemoteService } from './services/remote.service'
import { Spinner } from './services/utility.service'

export module Module {
    @NgModule({
        exports: [BrowserModule],
        imports: [
            CommonModule,
            FormsModule,
            HttpModule,
            NgbModule.forRoot(),
            ReactiveFormsModule,
            Router.RouteConfig
            //,CKEditorModule
        ],
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
            CreateFile.CreateFileComponent,
            ModalPopup.ModalPopupComponent,
            ContactSearch.SearchContact,
            ContactResult.ResultContact,
            Loader.LoaderSpinner
        ],
        entryComponents: [ModalPopup.ModalPopupComponent, Loader.LoaderSpinner],
        providers: [RemoteService.HttpService, RemoteService.LocalService, Spinner.SpinnerLoader],
        bootstrap: [Home.HomeComponent]
    })
    export class MainModule { }
}
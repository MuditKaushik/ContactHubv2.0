import { Routes } from '@angular/router'
import { ContactList } from '../components/dashboard/contacts/contactlist.component'
import { AddContact } from '../components/dashboard/contacts/addcontact.component'
import { FilesList } from '../components/dashboard/files/filelist.component'
import { ShareFiles } from '../components/dashboard/files/sharedfiles.component'
import { CreateFile } from '../components/dashboard/files/createfile.component'
import { ContactSearch } from '../components/dashboard/contacts/searchcontacts.component'
export module ChildRoutes {
    export const dashboardChild: Routes = [
        { path: 'contactlist', component: ContactList.ContactListComponent, outlet: 'dashb' },
        { path: 'addcontact', component: AddContact.AddContactComponent, outlet: 'dashb' },
        { path: 'filelist', component: FilesList.FileListComponent, outlet: 'dashb' },
        { path: 'sharedfiles', component: ShareFiles.ShareFilesComponent, outlet: 'dashb' },
        { path: 'createfiles', component: CreateFile.CreateFileComponent, outlet: 'dashb' },
        { path: 'search', component: ContactSearch.SearchContact, outlet: 'dashb' }
    ];
}
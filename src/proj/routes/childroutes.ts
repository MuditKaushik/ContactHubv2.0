import { Routes } from '@angular/router'
import { ContactList } from '../components/dashboard/contacts/contactlist.component'
import { AddContact } from '../components/dashboard/contacts/addcontact.component'

export module ChildRoutes {
    export const dashboardChild: Routes = [
        { path: 'contactlist', component: ContactList.ContactListComponent, outlet: 'dashb' },
        { path: 'addcontact', component: AddContact.AddContactComponent, outlet: 'dashb' },
    ];
}
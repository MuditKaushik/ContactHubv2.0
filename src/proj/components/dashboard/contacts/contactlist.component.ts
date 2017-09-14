import { Component } from '@angular/core'
import { Utility } from '../../../services/utility.service'

export module ContactList {
    @Component({
        templateUrl: new Utility.StylingandTemplateService('dashboard/contacts').getfile('contactlist.template.html')
    })
    export class ContactListComponent { }
}
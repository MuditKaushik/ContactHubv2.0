import { Component } from '@angular/core'
import { Utility } from '../../../services/template.service'

export module AddContact {
    @Component({
        templateUrl: new Utility.StylingandTemplateService('dashboard/contacts').getfile('addcontact.template.html')
    })
    export class AddContactComponent {
        constructor() { }
        open() {
        }
    }
}
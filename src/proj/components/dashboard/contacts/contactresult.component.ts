import { Component, Input } from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Utility } from '../../../services/template.service'

export module ContactResult {
    @Component({
        selector: 'contact-result',
        templateUrl: new Utility.StylingandTemplateService('dashboard/contacts').getfile('contactresult.template.html')
    })
    export class ResultContact {
        @Input('result') result: any
        constructor() { }
    }
}
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { Utility } from '../../../services/utility.service'

export module ContactResult {
    @Component({
        selector: 'contact-result',
        templateUrl: new Utility.StylingandTemplateService('dashboard/contacts').getfile('contactresult.template.html')
    })
    export class ResultContact implements OnChanges {
        @Input() result: any;
        constructor() {
            console.log(this.result);
        }
        ngOnChanges(changes: SimpleChanges) {
            if (changes['result']) {
                console.log(this.result);
            }
        }
    }
}
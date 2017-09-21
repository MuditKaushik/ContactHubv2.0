import { Component } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { Utility } from '../../services/utility.service'

export module dashboard {
    @Component({
        templateUrl: new Utility.StylingandTemplateService('dashboard').getfile('dashboard.template.html'),
        styleUrls:[new Utility.StylingandTemplateService('dashboard').getfile('dashboard.template.css')]
    })
    export class dashboardComponent {
        
        constructor(private modalService: NgbModal) { }
        ngOnInit() {
        }
        loadData() {
        }
    }
}
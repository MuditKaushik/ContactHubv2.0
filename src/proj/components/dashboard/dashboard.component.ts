import { Component } from '@angular/core'
import { Utility } from '../../services/utility.service'

export module dashboard {
    @Component({
        templateUrl:new Utility.StylingandTemplateService('dashboard').getfile('dashboard.template.html')
    })
    export class dashboardComponent { }
}
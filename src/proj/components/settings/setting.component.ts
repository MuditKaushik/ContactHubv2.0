import { Component } from '@angular/core'
import { Utility } from '../../services/utility.service'

export module Settings {
    @Component({
        templateUrl: new Utility.StylingandTemplateService('settings').getfile('settings.template.html')
    })
    export class SettingComponent { }
}
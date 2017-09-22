import { Component } from '@angular/core'
import { Utility } from '../../../services/template.service'

export module ShareFiles {
    @Component({
        templateUrl: new Utility.StylingandTemplateService('dashboard/files').getfile('sharedfiles.template.html')
    })
    export class ShareFilesComponent { }
}
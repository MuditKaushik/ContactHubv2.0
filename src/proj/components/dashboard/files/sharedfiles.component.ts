import { Component } from '@angular/core'
import { Utility } from '../../../services/utility.service'

export module ShareFiles {
    @Component({
        templateUrl:new Utility.StylingandTemplateService('dashboard/files').getfile('sharedfiles.template.html')
    })
    export class ShareFilesComponent { }
}
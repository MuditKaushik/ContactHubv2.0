import { Component } from '@angular/core'
import { Utility } from '../../../services/template.service'

export module CreateFile {
    @Component({
        templateUrl: new Utility.StylingandTemplateService('dashboard/files').getfile('createfiles.template.html')
    })
    export class CreateFileComponent { }
}
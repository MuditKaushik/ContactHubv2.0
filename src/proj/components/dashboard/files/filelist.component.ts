import { Component } from '@angular/core'
import { Utility } from '../../../services/template.service'

export module FilesList {
    @Component({
        templateUrl:new Utility.StylingandTemplateService('dashboard/files').getfile('filelist.template.html')
    })
    export class FileListComponent { }
}
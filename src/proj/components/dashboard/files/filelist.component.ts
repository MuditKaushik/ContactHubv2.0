import { Component } from '@angular/core'
import { Utility } from '../../../services/utility.service'

export module FilesList {
    @Component({
        templateUrl:new Utility.StylingandTemplateService('dashboard/files').getfile('filelist.template.html')
    })
    export class FileListComponent { }
}
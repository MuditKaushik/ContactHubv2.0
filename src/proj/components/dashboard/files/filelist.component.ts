import { Component, OnInit } from '@angular/core'
import { RemoteService } from '../../../services/remote.service'
import { Utility } from '../../../services/template.service'
import { FileList } from '../../../models/file/fileList'

export module FilesList {
    @Component({
        templateUrl: new Utility.StylingandTemplateService('dashboard/files').getfile('filelist.template.html')
    })
    export class FileListComponent implements OnInit {
        fileList: Array<FileList.IFileList>
        constructor(private http: RemoteService.HttpService) { }
        ngOnInit() {
            this.http.getFiles().subscribe((data) => {
                setTimeout(() => {
                    this.fileList = data.result;
                }, 2000);
            });
        }
    }
}
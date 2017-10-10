import { Component, OnInit } from '@angular/core'
import { RemoteService } from '../../../services/remote.service'
import { Utility } from '../../../services/template.service'
import { FileList } from '../../../models/file/fileList'
import { HttpResponseModel } from '../../../models/response/responseModel'
import { AlertServices } from '../../../services/alert.service'
import * as httpStatus from 'http-status-codes'

export module FilesList {
    @Component({
        templateUrl: new Utility.StylingandTemplateService('dashboard/files').getfile('filelist.template.html')
    })
    export class FileListComponent implements OnInit {
        type: string
        statusMsg: string
        fileList: Array<FileList.IFileList>

        constructor(private http: RemoteService.HttpService) { }

        ngOnInit() {
            this.http.getFiles().subscribe((data: HttpResponseModel.ResponseModel<Array<FileList.IFileList>>) => {
                this.type = AlertServices.AlertTypes.Alert_Info;
                this.statusMsg = AlertServices.AlertMessages.loading;
                setTimeout(() => {
                    if (data.status === httpStatus.OK) {
                        this.fileList = data.result;
                    }
                    else {
                        this.type = AlertServices.AlertTypes.Alert_Danger;
                        this.statusMsg = AlertServices.AlertMessages.server_error;
                    }
                }, 2000);
            });
        }
    }
}
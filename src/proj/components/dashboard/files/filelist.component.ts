import { Component, OnInit } from '@angular/core'
import { RemoteService } from '../../../services/remote.service'
import { Utility } from '../../../services/template.service'
import { FileList } from '../../../models/fileModels/fileList'
import { HttpResponseModel } from '../../../models/response/responseModel'
import { CommonServices } from '../../../services/common.service'
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
            this.type = CommonServices.AlertTypes.Alert_Info;
            this.statusMsg = CommonServices.AlertMessages.loading;
            this.http.getFiles().subscribe((data: HttpResponseModel.ResponseModel<Array<FileList.IFileList>>) => {
                setTimeout(() => {
                    switch (data.status) {
                        case httpStatus.OK: this.fileList = data.result; break;
                        case httpStatus.NOT_FOUND:
                            this.type = CommonServices.AlertTypes.Alert_Info;
                            this.statusMsg = CommonServices.AlertMessages.not_found;
                            break;
                        case httpStatus.BAD_REQUEST:
                            this.type = CommonServices.AlertTypes.Alert_Danger;
                            this.statusMsg = CommonServices.AlertMessages.bad_request;
                            break;
                    }
                }, 2000);
            }, (err) => {
                this.type = CommonServices.AlertTypes.Alert_Danger;
                this.statusMsg = CommonServices.AlertMessages.server_error;
            });
        }
    }
}
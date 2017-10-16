import { Component, OnInit, Input } from '@angular/core'
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'
import { Spinner } from '../../../services/utility.service'
import { Subject } from 'rxjs/Rx'
import { Utility } from '../../../services/template.service'
import { ModalPopup } from '../../common/modalPopup/modalpopup.component'
import { RemoteService } from '../../../services/remote.service'
import { ContactModel } from '../../../models/contactModels/contactModel'
import { AlertModel } from '../../../models/alertModel/alertModel'
import { HttpResponseModel } from '../../../models/response/responseModel'
import { CommonServices } from '../../../services/common.service'
import * as httpStatus from 'http-status-codes'

export module ContactList {
    @Component({
        templateUrl: new Utility.StylingandTemplateService('dashboard/contacts').getfile('contactlist.template.html')
    })
    export class ContactListComponent implements OnInit {
        type: string;
        statusMsg: string;
        personList: Array<ContactModel.ContactViewModel>
        gitHubList: Array<any>

        constructor(private modalService: NgbModal,
            private remoteService: RemoteService.HttpService,
            private loader: Spinner.SpinnerLoader) {
        }
        ngOnInit() {
            this.type = CommonServices.AlertTypes.Alert_Info;
            this.statusMsg = CommonServices.AlertMessages.loading;
            this.remoteService.getPeople().subscribe((data: HttpResponseModel.ResponseModel<Array<ContactModel.ContactViewModel>>) => {
                setTimeout(() => {
                    switch (data.status) {
                        case httpStatus.OK: this.personList = data.result; break;
                        case httpStatus.NOT_FOUND:
                            this.type = CommonServices.AlertTypes.Alert_Info;
                            this.statusMsg = CommonServices.AlertMessages.not_found;
                            break;
                        case httpStatus.BAD_REQUEST:
                            this.type = CommonServices.AlertTypes.Alert_Warning;
                            this.statusMsg = CommonServices.AlertMessages.bad_request;
                            break;
                    }
                }, 2000);
            }, (err) => {
                this.type = CommonServices.AlertTypes.Alert_Danger;
                this.statusMsg = CommonServices.AlertMessages.server_error;
            });
        }
        showContact(id: number): void {
            this.personList.filter((val, pos) => {
            });
            let popup = this.modalService.open(ModalPopup.ModalPopupComponent);
            popup.componentInstance.title = "Contact Details";
            popup.componentInstance.body = "";
            popup.result.then((pass) => {
            }, (dismiss) => {
            }).catch((err) => { });
        }
        removeContact(): void {
            let popup = this.modalService.open(ModalPopup.ModalPopupComponent, {
                keyboard: false
            });
            popup.componentInstance.title = 'Remove Contacts';
            popup.componentInstance.body = 'Are you sure you want to delete this contact??';
            popup.result.then((pass) => {
                console.log(pass);
            }, (close) => {
                console.log(close);
            }).catch((err) => {
                console.log(err);
            });
        }
    }
}
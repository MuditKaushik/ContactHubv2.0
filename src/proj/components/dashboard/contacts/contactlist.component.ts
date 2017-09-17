import { Component, OnInit } from '@angular/core'
import { Utility } from '../../../services/utility.service'
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'
import { ModalPopup } from '../../common/modalPopup/modalpopup.component'
import { RemoteService } from '../../../services/remote.service'
import { ContactModel } from '../../../models/contactModels/contactModel'

export module ContactList {
    @Component({
        templateUrl: new Utility.StylingandTemplateService('dashboard/contacts').getfile('contactlist.template.html')
    })
    export class ContactListComponent implements OnInit {
        personList: Array<ContactModel.ContactViewModel>
        constructor(private modalService: NgbModal, private remoteService: RemoteService.HttpService) {
        }
        ngOnInit() {
            this.remoteService.getPeople().subscribe((data) => {
                this.personList = data.value;
            });
        }
        showContact(): void {
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
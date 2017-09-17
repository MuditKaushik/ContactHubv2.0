import { Component, Input } from '@angular/core'
import { Utility } from '../../../services/utility.service'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

export module ModalPopup {
    @Component({
        templateUrl: new Utility.StylingandTemplateService('common/modalpopup').getfile('modalpopup.template.html')
    })
    export class ModalPopupComponent {
        @Input() title: string;
        @Input() body: string;
        constructor(private ngbActiveModal: NgbActiveModal) { }
        activeModal(type: string) {
            switch (type) {
                case 'close':
                    this.ngbActiveModal.close();
                    break;
                case 'dismiss':
                    this.ngbActiveModal.dismiss();
                    break;
            }
        }
    }
}
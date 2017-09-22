import { Injectable } from '@angular/core'
import { Subscription } from 'rxjs/Subscription'
import { Loader } from '../components/common/modalPopup/loader.component'
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'
export module Spinner {
    @Injectable()
    export class SpinnerLoader {
        private modelRef: NgbModalRef
        private modalSubscription: Subscription
        constructor(private modalService: NgbModal) { }
        showloader(show: boolean): void {
            switch (show) {
                case true: this.modelRef = this.modalService.open(Loader.LoaderSpinner, {
                    keyboard: false,
                    size: "sm",
                    windowClass: ""
                });
                 
                break;
                case false: this.modelRef.dismiss(); break;
                default: this.modelRef.dismiss(); break;
            }
        }
    }
}
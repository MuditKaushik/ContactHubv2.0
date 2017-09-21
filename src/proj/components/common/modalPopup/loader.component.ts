import { Component, Injectable } from '@angular/core'
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'
import { Utility } from '../../../services/utility.service'
export module Loader {
    @Component({
        selector: "loader",
        templateUrl: new Utility.StylingandTemplateService('common/modalPopup').getfile('loader.template.html')
    })
    export class LoaderSpinner {
        constructor() {
        }
    }
}
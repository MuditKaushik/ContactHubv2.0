import { Component, OnInit } from '@angular/core'
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
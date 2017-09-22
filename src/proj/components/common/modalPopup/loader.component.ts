import { Component } from '@angular/core'
import { Utility } from '../../../services/template.service'
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
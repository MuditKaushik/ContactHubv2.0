import { Component } from '@angular/core'
import { Utility } from '../../services/utility.service'

export module Signup {
    @Component({
        templateUrl: new Utility.StylingandTemplateService('user').getfile('signup.template.html')
    })
    export class SgninupComponent { }
}
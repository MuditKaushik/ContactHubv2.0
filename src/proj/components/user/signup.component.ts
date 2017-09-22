import { Component } from '@angular/core'
import { Utility } from '../../services/template.service'

export module Signup {
    @Component({
        templateUrl: new Utility.StylingandTemplateService('user').getfile('signup.template.html')
    })
    export class SgninupComponent { }
}
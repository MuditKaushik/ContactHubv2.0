import { Component } from '@angular/core'
import { Utility } from '../../services/template.service'

export module Signin {
    @Component({
        templateUrl:new Utility.StylingandTemplateService('user').getfile('signin.template.html')
    })
    export class SigninComponent { }
}
import { Component } from '@angular/core'
import { Utility } from '../../services/template.service'

export module Home {
    @Component({
        selector: "contact-hub",
        templateUrl: new Utility.StylingandTemplateService("home").getfile("home.template.html"),
        styleUrls: [new Utility.StylingandTemplateService('home').getfile('home.template.css')]
    })
    export class HomeComponent { }
}
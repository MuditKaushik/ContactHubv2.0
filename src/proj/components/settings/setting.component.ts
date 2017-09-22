import { Component, OnInit } from '@angular/core'
import { Utility } from '../../services/template.service'
import { RemoteService } from '../../services/remote.service'

export module Settings {
    @Component({
        templateUrl: new Utility.StylingandTemplateService('settings').getfile('settings.template.html')
    })
    export class SettingComponent implements OnInit {
        deactivate: Array<any>
        reasonValue: number = 0
        showOther = false
        private otherReason = 5
        constructor(private localService: RemoteService.LocalService) { }

        ngOnInit() {
            this.localService.get_Account_Deactivate_Reasons().subscribe((data) => {
                this.deactivate = data;
            });
        }

        reason() {
            if (this.reasonValue === this.otherReason) {
                this.showOther = true;
            }
            else {
                this.showOther = false;
            }
        }
    }
}
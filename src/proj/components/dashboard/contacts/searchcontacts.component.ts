import { Component, OnInit, OnChanges } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Utility } from '../../../services/template.service'
import { RemoteService } from '../../../services/remote.service'

export module ContactSearch {
    @Component({
        templateUrl: new Utility.StylingandTemplateService('dashboard/contacts').getfile('searchcontact.template.html')
    })
    export class SearchContact implements OnInit, OnChanges {
        searchForm: FormGroup
        contact: any
        constructor(private httpService: RemoteService.HttpService) { }
        ngOnInit() {
            this.searchForm = this.createSearchForm();
        }
        ngOnChanges() {

        }
        searchPerson(model: FormGroup) {
            if (this.searchForm.valid) {
                this.httpService.getGitHubUser(model.controls.username.value).subscribe((data) => {
                    this.contact = data;
                });
            }
        }
        createSearchForm(): FormGroup {
            return new FormGroup({
                username: new FormControl(null, [Validators.required, Validators.pattern("^[a-zA-Z]*$")])
            });
        }

    }
}
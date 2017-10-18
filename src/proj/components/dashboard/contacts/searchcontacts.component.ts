import { Component, OnInit, OnChanges } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Utility } from '../../../services/template.service'
import { RemoteService } from '../../../services/remote.service'
import { CommonServices } from '../../../services/common.service'
import { ContactModel } from '../../../models/contactModels/contactModel'
import { HttpResponseModel } from '../../../models/response/responseModel'
import { HttpRequestModel } from '../../../models/request/requestModel'
import * as httpStatus from 'http-status-codes'

export module ContactSearch {
    @Component({
        templateUrl: new Utility.StylingandTemplateService('dashboard/contacts').getfile('searchcontact.template.html')
    })
    export class SearchContact implements OnInit {
        searchForm: FormGroup
        viewModel: ContactModel.ContactSearch = <ContactModel.ContactSearch>{};
        contact: Array<ContactModel.ContactViewModel>
        criteriaList: Array<ContactModel.SearchCriteria>
        requestModel: HttpRequestModel.RequestModel<any> = <HttpRequestModel.RequestModel<any>>{};

        constructor(private httpService: RemoteService.HttpService) { }
        ngOnInit() {
            this.httpService.getSearchCriteria().subscribe((data: HttpResponseModel.ResponseModel<Array<ContactModel.SearchCriteria>>) => {
                if (data.status === httpStatus.OK) {
                    this.criteriaList = data.result;
                }
            });
            this.searchForm = this.createSearchForm();
        }
        searchPerson(model: FormGroup) {
            debugger;
            if (model.valid) {
                this.requestModel.requestBody = model.value;
                this.httpService.getContactByFilter(this.requestModel).subscribe((data: HttpResponseModel.ResponseModel<Array<ContactModel.ContactViewModel>>) => {
                    if (data.status === httpStatus.OK) {
                        this.contact = data.result;
                    }
                });
            }
        }
        private createSearchForm(): FormGroup {
            return new FormGroup({
                criteria: new FormControl(this.viewModel.criteria = "", [Validators.required]),
                searchTerm: new FormControl(this.viewModel.searchTerm, [Validators.required])
            });
        }
    }
}
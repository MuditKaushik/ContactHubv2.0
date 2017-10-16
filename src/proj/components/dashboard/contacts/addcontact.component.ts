import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { Utility } from '../../../services/template.service'
import { ContactModel } from '../../../models/contactModels/contactModel'
import { CommonModel } from '../../../models/common/commonModel'
import { RemoteService } from '../../../services/remote.service'
import { HttpResponseModel } from '../../../models/response/responseModel'
import { CommonServices } from '../../../services/common.service'
import * as httpStatus from 'http-status-codes'

export module AddContact {
    @Component({
        templateUrl: new Utility.StylingandTemplateService('dashboard/contacts').getfile('addcontact.template.html')
    })
    export class AddContactComponent implements OnInit {
        newcontact: FormGroup
        viewModel: ContactModel.ContactViewModel = {} as any
        genderList: Array<CommonModel.GenderModel>
        countries: Array<CommonModel.Country>

        constructor(private httpService: RemoteService.HttpService, private formBuilder: FormBuilder) { }

        ngOnInit() {
            this.httpService.getGender().subscribe((data: HttpResponseModel.ResponseModel<Array<CommonModel.GenderModel>>) => {
                if (data.status === httpStatus.OK) {
                    this.genderList = data.result;
                }
            });
            this.httpService.getCountries().subscribe((data: HttpResponseModel.ResponseModel<Array<CommonModel.Country>>) => {
                if (data.status === httpStatus.OK) {
                    this.countries = data.result;
                }
            });
            this.newcontact = this.bindForm();
        }

        addContact(contact: FormGroup): void {
            console.log(contact.value);
            let formValid = this.validateForm(this.newcontact);
        }

        validateForm(form: FormGroup): boolean {
            for (let item in this.newcontact.controls) {
                console.log(this.newcontact.controls[item]);
            }
            return false;
        }

        IsValidFeild(name: string): boolean {
            let feildControl = this.newcontact.controls[name], isValid: boolean = true;
            if (feildControl.touched || !feildControl.pristine) {
                for (let error in feildControl.errors) {
                    console.log(error);
                    switch (error) {
                        case "required": isValid = false; break;
                        case "pattern": isValid = false; break;
                        case "minlength": isValid = false; break;
                    }
                }
            }
            return isValid;
        }

        private bindForm(): FormGroup {
            return new FormGroup({
                firstName: new FormControl(this.viewModel.firstName, [Validators.required, Validators.pattern("^[a-zA-Z]*$")]),
                middleName: new FormControl(this.viewModel.middleName, [Validators.pattern("^[a-zA-Z]*$")]),
                lastName: new FormControl(this.viewModel.lastName, [Validators.required, Validators.pattern("^[a-zA-Z]*$")]),
                email: new FormControl(this.viewModel.email, [Validators.required, Validators.pattern(CommonServices.Regex.email_regex)]),
                dob: new FormControl(this.viewModel.dob, []),
                gender: new FormControl(this.viewModel.gender, [Validators.required]),
                code: new FormControl(this.viewModel.dial_code, [Validators.required]),
                phone: new FormControl(this.viewModel.phone, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10)]),
                avatar: new FormControl(this.viewModel.avatar)
            });
        }
    }
}
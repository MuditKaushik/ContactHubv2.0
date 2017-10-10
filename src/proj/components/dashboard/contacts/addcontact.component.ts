import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Utility } from '../../../services/template.service'
import { ContactModel } from '../../../models/contactModels/contactModel'
import { CommonModel } from '../../../models/common/commonModel'
import { RemoteService } from '../../../services/remote.service'
import { HttpResponseModel } from '../../../models/response/responseModel'
import * as httpStatus from 'http-status-codes'

export module AddContact {
    @Component({
        templateUrl: new Utility.StylingandTemplateService('dashboard/contacts').getfile('addcontact.template.html')
    })
    export class AddContactComponent implements OnInit {
        newcontact: FormGroup
        viewModel: ContactModel.ContactViewModel = {} as any
        gender: Array<CommonModel.GenderModel>
        constructor(private httpService: RemoteService.HttpService) { }

        ngOnInit() {
            this.httpService.getGender().subscribe((data: HttpResponseModel.ResponseModel<Array<CommonModel.GenderModel>>) => {
                if (data.status === httpStatus.OK) {
                    this.gender = data.result;
                }
                console.log(this.gender);
            });
            this.newcontact = this.bindForm();
        }

        addContact(contact: ContactModel.ContactViewModel): void {
            let formValid = this.validateForm(this.newcontact);
        }

        validateForm(form: FormGroup): boolean {
            Object.keys(form.controls).forEach((val, key) => {
                form.get(val).errors
            });
            return false;
        }

        IsValidFeild(name: string): boolean {
            let feildControl = this.newcontact.controls[name], isValid: boolean = true;
            if (feildControl.touched || !feildControl.pristine) {
                for (let error in feildControl.errors) {
                    switch (error) {
                        case "required": isValid = false; break;
                        case "pattern": isValid = false; break;
                    }
                }
            }
            return isValid;
        }

        bindForm(): FormGroup {
            return new FormGroup({
                firstName: new FormControl(this.viewModel.firstName, [Validators.required, Validators.pattern("^[a-zA-Z]*$")]),
                middleName: new FormControl(this.viewModel.middleName, [Validators.pattern("^[a-zA-Z]*$")]),
                lastName: new FormControl(this.viewModel.lastName, [Validators.required, Validators.pattern("^[a-zA-Z]*$")]),
                email: new FormControl(this.viewModel.email, [Validators.required, Validators.email]),
                dob: new FormControl(this.viewModel.dob, []),
                gender: new FormControl(this.viewModel.gender, [Validators.required]),
                phone: new FormControl(this.viewModel.phone, [Validators.required, Validators.pattern("^[0-9]*$")]),
                avatar: new FormControl(this.viewModel.avatar)
            });
        }
    }
}
import { Injectable } from '@angular/core'
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'
import { Observable } from 'rxjs/Rx'
import { Http, Response, Headers } from '@angular/http'
import { ContactModel } from '../models/contactModels/contactModel'
import { Loader } from '../components/common/modalPopup/loader.component'
import 'rxjs/add/operator/map'

export module RemoteService {
    @Injectable()
    export class HttpService {
        private modelRef: NgbModalRef
        constructor(private httpService: Http, private ngbService: NgbModal) {
            this.modelRef = this.ngbService.open(Loader.LoaderSpinner, { size: "sm", keyboard: false });
        }
        getPeople(): Observable<Array<ContactModel.ContactViewModel>> {
            return this.httpService.get('http://services.odata.org/v4/TripPinServiceRW/People')
                .map((data) => {
                    let response = data.json();
                    this.modelRef.dismiss();
                    return <Array<ContactModel.ContactViewModel>>response.value;
                });
        }
        getGitHubUsers(): Observable<any> {
            return this.httpService.get('https://api.github.com/users')
                .map((data) => {
                    let response = <any>data.json()
                    this.modelRef.dismiss();
                    return response;
                });
        }
        getGitHubUser(username: string): Observable<any> {
            let url = "https://api.github.com/users/".concat(username);
            return this.httpService.get(url).map((data) => {
                let response = <any>data.json();
                this.modelRef.dismiss();
                return response;
            });
        }
    }

    @Injectable()
    export class LocalService {
        private modelRef: NgbModalRef
        constructor(private httpLocal: Http, private ngbService: NgbModal) {
            this.modelRef = this.ngbService.open(Loader.LoaderSpinner, { size: "sm", keyboard: false });
        }
        get_Account_Deactivate_Reasons(): Observable<Array<object>> {
            return this.httpLocal.get('./src/proj/data/decativate_acc.json')
                .map((data) => {
                    let response = <Array<any>>data.json().reasons;
                    this.modelRef.dismiss();
                    return response;
                });
        }
        get_contact(): Observable<Array<object>> {
            return this.httpLocal.get('./src/proj/data/mockData.json').map((data) => {
                let response = <Array<object>>data.json().contacts;
                this.modelRef.dismiss();
                return response;
            });
        }
    }
}
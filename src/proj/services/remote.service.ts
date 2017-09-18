import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Rx'
import { Http, Response, Headers } from '@angular/http'
import { ContactModel } from '../models/contactModels/contactModel'
import 'rxjs/add/operator/map'

export module RemoteService {
    @Injectable()
    export class HttpService {
        constructor(private httpService: Http) { }
        getPeople(): Observable<Array<ContactModel.ContactViewModel>> {
            return this.httpService.get('http://services.odata.org/v4/TripPinServiceRW/People')
                .map((data) => {
                    let response = data.json();
                    return <Array<ContactModel.ContactViewModel>>response.value;
                });
        }
        getGitHubUsers(): Observable<any> {
            return this.httpService.get('https://api.github.com/users')
                .map((data) => {
                    let response = <any>data.json()
                    return response;
                });
        }
        getGitHubUser(username: string): Observable<any> {
            let url = "https://api.github.com/users/".concat(username);
            return this.httpService.get(url).map((data) => {
                let response = <any>data.json();
                return response;
            });
        }
    }

    @Injectable()
    export class LocalService {
        constructor(private httpLocal: Http) { }
        get_Account_Deactivate_Reasons(): Observable<Array<object>> {
            return this.httpLocal.get('./src/proj/data/decativate_acc.json')
                .map((data) => {
                    let response = <Array<any>>data.json().reasons;
                    return response;
                });
        }
    }
}
import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptionsArgs } from '@angular/http'
import { ContactModel } from '../models/contactModels/contactModel'
import { Api } from './urls'
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

export module RemoteService {
    @Injectable()
    export class HttpService {
        constructor(private httpService: Http) {
        }
        getPeople(): Observable<any> {
            return this.httpService.get(Api.contactUrl).map((data: Response) => {
                let response = <any>data.json();
                return response;
            }).catch(this.ErrorHandler);
        }
        ErrorHandler(err: any) {
            console.log("server error:", err);
            if (err instanceof Response) {
                let errMsg = "";
                try {
                    errMsg = err.json().error;
                }
                catch (ex) {
                    errMsg = err.statusText;
                }
                return Observable.throw(errMsg);
            }
            return Observable.throw(err || "internal server error.");
        }
    }

    @Injectable()
    export class LocalService {
        constructor(private httpLocal: Http) {
        }
        get_Account_Deactivate_Reasons(): Observable<Array<object>> {
            return this.httpLocal.get('./src/proj/data/decativate_acc.json')
                .map((data) => {
                    let response = <Array<any>>data.json().reasons;
                    return response;
                });
        }
        get_contact(): Observable<Array<object>> {
            return this.httpLocal.get('./src/proj/data/mockData.json').map((data) => {
                let response = <Array<object>>data.json().contacts;
                return response;
            });
        }
    }
}
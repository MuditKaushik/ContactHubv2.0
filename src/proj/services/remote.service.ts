import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptionsArgs } from '@angular/http'
import { ContactModel } from '../models/contactModels/contactModel'
import { HttpResponseModel } from '../models/response/responseModel'
import { HttpRequestModel } from '../models/request/requestModel'
import { Api } from './urls'
import { Observable, Subject } from 'rxjs/Rx'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'
import * as httpStatus from 'http-status-codes'

export module RemoteService {
    @Injectable()
    export class HttpService {
        response: HttpResponseModel.ResponseModel<any> = {} as any;
        urls = Api.GetUrls();
        constructor(private httpService: Http) {
        }
        getPeople(): Observable<HttpResponseModel.ResponseModel<any>> {
            return this.httpService.get(this.urls.GetContactList).map((data: Response) => {
                this.response.status = data.status;
                this.response.result = <any>data.json();
                return this.response;
            }).catch(this.ErrorHandler);
        }
        getFiles(): Observable<HttpResponseModel.ResponseModel<any>> {
            return this.httpService.get(this.urls.GetFileList).map((data: Response) => {
                this.response.result = <any>data.json();
                this.response.status = data.status;
                return this.response;
            }).catch(this.ErrorHandler);
        }
        getGender(): Observable<HttpResponseModel.ResponseModel<any>> {
            return this.httpService.get(this.urls.GetGenders).map((data: Response) => {
                this.response.status = data.status;
                this.response.result = <any>data.json();
                return this.response;
            }).catch(this.ErrorHandler);
        }
        getCountries(): Observable<HttpResponseModel.ResponseModel<any>> {
            return this.httpService.get(this.urls.GetCountries).map((data: Response) => {
                this.response.status = data.status;
                this.response.result = <any>data.json();
                return this.response;
            }).catch(this.ErrorHandler);
        }
        getSearchCriteria(): Observable<HttpResponseModel.ResponseModel<any>> {
            return this.httpService.get(this.urls.GetContactsSearchCriteria).map((data: Response) => {
                this.response.status = data.status;
                this.response.result = <any>data.json();
                return this.response;
            }).catch(this.ErrorHandler);
        }
        getContactByFilter(request: HttpRequestModel.RequestModel<any>): Observable<HttpResponseModel.ResponseModel<any>> {
            debugger;
            return this.httpService.post(this.urls.FilterContact, request.requestBody).map((data: Response) => {
                debugger;
                this.response.status = data.status;
                this.response.result = <any>data.json();
                return this.response;
            }).catch(this.ErrorHandler);
        }
        ErrorHandler(err: any) {
            if (err instanceof Response) {
                //log error.
                console.log("server error", err);
                this.response.status = (err.status || httpStatus.INTERNAL_SERVER_ERROR);
                this.response.result = (err.statusText || "Internal server error.");
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
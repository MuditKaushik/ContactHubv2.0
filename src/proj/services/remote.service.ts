import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Rx'
import { Http, Response, Headers } from '@angular/http'
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'

export module RemoteService {
    const Header: Headers = new Headers({ "Contect-Type": "application/json" });
    @Injectable()
    export class HttpService {
        constructor(private httpService: Http) { }
        getPeople(): Observable<any> {
            return this.httpService.get('http://services.odata.org/v4/TripPinServiceRW/People')
                .map((data) => {
                    return <any>data.json();
                });
        }
        getOtherPeople(): Promise<any> {
            return this.httpService.get('http://services.odata.org/v4/TripPinServiceRW/People').toPromise();
        }
    }
    //export class LocalService<TRes> { }
}
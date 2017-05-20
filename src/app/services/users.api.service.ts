import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ConfigService } from './config.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersApiService {
    constructor(private _http: Http, private _config: ConfigService) { }

    signUp(email: string, name: string, password: string): Observable<object> {
        return this._http.post(this._config.apiUrl + 'appusers/signup.json', { email, name, password }).map(this.extractData).catch(this.handleError);
    };
    
    login(email: string, password: string): Observable<object> {
        return this._http.post(this._config.apiUrl + 'appusers/login.json', { email, password }).map(this.extractData).catch(this.handleError);
    };

    private extractData(res: Response) {
        let body = {};
        try {
            body = res.json();
        }
        catch(e) {
        }
        return body;
    }

    private handleError(error: Response | any) {
        let errMsg: string;

        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }

        console.error(errMsg);

        return Observable.throw(errMsg);
    }
}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ConfigService } from './config.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
    loggedIn: boolean = false;

    constructor(private _http: Http, private _config: ConfigService) { }

    searchMovie(query: string): Observable<object> {
        return this._http.get(this._config.apiUrl + 'movies/search/' + query + '.json').map(this.extractData).catch(this.handleError);
    };

    getMovieByImdbid(imdbid: string): Observable<object> {
        return this._http.get(this._config.apiUrl + 'movies/getMovieByImdbid/' + imdbid + '.json')
                    .map(this.extractData)
                    .catch(this.handleError);
    };

    signUp(email: string, name: string, password: string): Observable<object> {
        return this._http.post(this._config.apiUrl + 'appusers/signup.json', { email, name, password })
                    .map(this.extractData)
                    .catch(this.handleError);
    };

    login(email: string, password: string): Observable<object> {
        return this._http.post(this._config.apiUrl + 'appusers/login.json', { email, password }, { withCredentials: true })
                    .map(this.extractData)
                    .catch(this.handleError);
    };

    getAccountData(): Observable<object> {
        return this._http.get(this._config.apiUrl + 'appusers/getAccountData.json', { withCredentials: true })
                    .map(this.extractData)
                    .catch(this.handleError);
    };

    addToFavorites(imdbid: string): Observable<object> {
        return this._http.get(this._config.apiUrl + 'appusers/addToFavorites/' + imdbid + '.json', { withCredentials: true })
                    .map(this.extractData)
                    .catch(this.handleError);
    };

    getMyFavorites(): Observable<object> {
        return this._http.get(this._config.apiUrl + 'appusers/getMyFavorites.json', { withCredentials: true })
                    .map(this.extractData)
                    .catch(this.handleError);
    };

    addMovieRating(imdbid: string, rating: number): Observable<object> {
        return this._http.get(this._config.apiUrl + 'appusers/addMovieRating' + '/' + imdbid + '/' + rating + '.json', { withCredentials: true })
                    .map(this.extractData)
                    .catch(this.handleError);
    };

    getMovieRating(imdbid: string): Observable<object> {
        return this._http.get(this._config.apiUrl + 'appusers/getMovieRating' + '/' + imdbid + '.json', { withCredentials: true })
                    .map(this.extractData)
                    .catch(this.handleError);
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

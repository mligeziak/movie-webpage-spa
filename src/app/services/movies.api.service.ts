import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ConfigService } from './config.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesApiService {
    constructor(private _http: Http, private _config: ConfigService) { }

    searchMovie(query: string): Observable<object> {
        return this._http.get(this._config.apiUrl + 'movies/search/' + query + '.json').map(this.extractData).catch(this.handleError);
    };

    getMovieByImdbid(imdbid: string): Observable<object> {
        return this._http.get(this._config.apiUrl + 'movies/getMovieByImdbid/' + imdbid + '.json').map(this.extractData).catch(this.handleError);
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

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {
    title: string = 'Movie title';
    imdbid: string;
    movie: any = {};
    loaded: boolean = false;
    private subsription: any;
    private movieSubsription: any;
    private _route: ActivatedRoute;
    private _apiService: ApiService;

    constructor(_route: ActivatedRoute, _apiService: ApiService) {
        this._route = _route;
        this._apiService = _apiService
    }

    ngOnInit() {
        this.subsription = this._route.params.subscribe(
            params => {
                this.imdbid = params['imdbid'];

                this.loadMovieInfoByImdb(this.imdbid);
            }
        );
    }

    loadMovieInfoByImdb(imdbid: any) {
        this.movieSubsription = this._apiService.getMovieByImdbid(imdbid).subscribe(
            movie => {
                this.movie = movie["movie"];

                this.loaded = true;
            }
        );
    }

    ngOnDestroy() {
        if (this.subsription != undefined) {
            this.subsription.unsubscribe();
        }
        if (this.movieSubsription != undefined) {
            this.movieSubsription.unsubscribe();
        }
    }
}
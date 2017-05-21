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
    movie: object = {};
    addedToFavorites: boolean = false;
    addedMovieRating: boolean = false;
    flickRating: object = {};
    loaded: boolean = false;
    private subsription: any;
    private movieSubsription: any;
    private addToFavoritesSubsription: any;
    private addMovieRatingSubsription: any;
    private getMovieRatingSubsription: any;
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
                this.loadFlickRating(this.imdbid);
            }
        );
    }

    loadFlickRating(imdbid: string) {
        this.getMovieRatingSubsription = this._apiService.getMovieRating(imdbid).subscribe(
            flickRating => {
                this.flickRating = flickRating['rating'][0];
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

    addToFavorites(imdbid: string) {
        this.addToFavoritesSubsription = this._apiService.addToFavorites(imdbid).subscribe(
            addedToFavorites => {
                this.addedToFavorites = addedToFavorites['saved'];
            }
        );
    }

    addMovieRating(imdbid: string, rating: number) {
        this.addMovieRatingSubsription = this._apiService.addMovieRating(imdbid, rating).subscribe(
            addedMovieRating => {
                this.addedMovieRating = addedMovieRating['saved'];
                
                this.loadFlickRating(this.imdbid);
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
        if (this.addToFavoritesSubsription != undefined) {
            this.addToFavoritesSubsription.unsubscribe();
        }
        if (this.addMovieRatingSubsription != undefined) {
            this.addMovieRatingSubsription.unsubscribe();
        }
    }
}
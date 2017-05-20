import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesApiService } from '../services/movies.api.service';

@Component({
    selector: 'movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {
    title: string = 'Movie title';
    imdbid: string;
    movie: any = {};
    private subsription: any;
    private movieSubsription: any;
    private _route: ActivatedRoute;
    private _moviesApiService: MoviesApiService;

    constructor(_route: ActivatedRoute, _moviesApiService: MoviesApiService) {
        this._route = _route;
        this._moviesApiService = _moviesApiService
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
        this.movieSubsription = this._moviesApiService.getMovieByImdbid(imdbid).subscribe(
            movie => {
                this.movie = movie["movie"];
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
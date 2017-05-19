import { Component, Input } from '@angular/core';
import { MoviesApiService } from '../../services/movies.api.service';

@Component({
    selector: 'dynamic-search-box',
    template: require('./dynamic-search-box.component.html')
})
export class DynamicSearchBoxComponent {
    title: string = 'Dynamic search';
    query: string = '';
    results: object = {};
    _moviesApiService: MoviesApiService;

    constructor(_moviesApiService: MoviesApiService) {
        this._moviesApiService = _moviesApiService;
    }

    dynamicSearch() {
        this._moviesApiService.searchMovie(this.query).subscribe(
            results => this.results = results
        );
    }
}
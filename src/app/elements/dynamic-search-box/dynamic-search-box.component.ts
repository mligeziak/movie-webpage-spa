import { Component } from '@angular/core';
import { MoviesApiService } from '../../services/movies.api.service';
import { DynamicSearchBoxItemComponent } from './dynamic-search-box-item/dynamic-search-box-item.component';

@Component({
    selector: 'dynamic-search-box',
    template: require('./dynamic-search-box.component.html'),
    entryComponents: [DynamicSearchBoxItemComponent]
})
export class DynamicSearchBoxComponent {
    title: string = 'Dynamic search';
    query: string = '';
    results: object = {};
    request: any;
    _moviesApiService: MoviesApiService;

    constructor(_moviesApiService: MoviesApiService) {
        this._moviesApiService = _moviesApiService;
    }

    dynamicSearch() {
        if(this.request != undefined) {
            this.request.unsubscribe();
        }

        this.request = this._moviesApiService.searchMovie(this.query).subscribe(
            results => this.results = results
        );
    }
}
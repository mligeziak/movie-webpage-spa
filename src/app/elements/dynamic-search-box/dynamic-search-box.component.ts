import { Component, OnDestroy } from '@angular/core';
import { MoviesApiService } from '../../services/movies.api.service';
import { DynamicSearchBoxItemComponent } from './dynamic-search-box-item/dynamic-search-box-item.component';

@Component({
    selector: 'dynamic-search-box',
    template: require('./dynamic-search-box.component.html'),
    entryComponents: [DynamicSearchBoxItemComponent]
})
export class DynamicSearchBoxComponent implements OnDestroy {
    title: string = 'Dynamic search';
    query: string = '';
    results: object = {};
    private subsription: any;
    private _moviesApiService: MoviesApiService;

    constructor(_moviesApiService: MoviesApiService) {
        this._moviesApiService = _moviesApiService;
    }

    dynamicSearch() {
        if (this.subsription != undefined) {
            this.subsription.unsubscribe();
        }

        this.subsription = this._moviesApiService.searchMovie(this.query).subscribe(
            results => this.results = results
        );
    }

    ngOnDestroy() {
        if (this.subsription != undefined) {
            this.subsription.unsubscribe();
        }
    }
}
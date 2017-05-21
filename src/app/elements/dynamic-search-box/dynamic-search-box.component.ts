import { Component, OnDestroy } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { MovieItemComponent } from '../movie-item/movie-item.component';

@Component({
    selector: 'dynamic-search-box',
    templateUrl: './dynamic-search-box.component.html',
    entryComponents: [MovieItemComponent]
})
export class DynamicSearchBoxComponent implements OnDestroy {
    query: string = '';
    results: object = {};
    private subsription: any;
    private _apiService: ApiService;

    constructor(_apiService: ApiService) {
        this._apiService = _apiService;
    }

    dynamicSearch() {
        if (this.subsription != undefined) {
            this.subsription.unsubscribe();
        }

        this.subsription = this._apiService.searchMovie(this.query).subscribe(
            results => this.results = results
        );
    }

    ngOnDestroy() {
        if (this.subsription != undefined) {
            this.subsription.unsubscribe();
        }
    }
}
import { Component, OnDestroy } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { DynamicSearchBoxItemComponent } from './dynamic-search-box-item/dynamic-search-box-item.component';

@Component({
    selector: 'dynamic-search-box',
    templateUrl: './dynamic-search-box.component.html',
    entryComponents: [DynamicSearchBoxItemComponent]
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
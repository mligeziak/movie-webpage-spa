import { Component, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'dynamic-search-box',
    template: require('./dynamic-search-box.component.html')
})
export class DynamicSearchBoxComponent {
    title: string = 'Dynamic search';
    query: string = '';
    _apiService: ApiService;

    constructor(_apiService: ApiService) {
        this._apiService = _apiService;
    }
}
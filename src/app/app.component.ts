import { Component } from '@angular/core';
import { ApiService } from './services/api.service'
import { ConfigService } from './services/config.service'

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [
        ApiService,
        ConfigService
    ]
})
export class AppComponent {
    _apiService: ApiService;

    constructor(_apiService: ApiService) {
        this._apiService = _apiService;
    }
}
import { Component } from '@angular/core';
import { MoviesApiService } from './services/movies.api.service'

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [MoviesApiService]
})
export class AppComponent { }
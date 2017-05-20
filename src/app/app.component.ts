import { Component } from '@angular/core';
import { MoviesApiService } from './services/movies.api.service'
import { UsersApiService } from './services/users.api.service'
import { ConfigService } from './services/config.service'

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        MoviesApiService,
        UsersApiService,
        ConfigService
    ]
})
export class AppComponent { }
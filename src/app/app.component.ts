import { Component } from '@angular/core';
import { ApiService } from './services/api.service'

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [ApiService]
})
export class AppComponent { }
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'user-logout',
    templateUrl: './user.logout.component.html'
})
export class UserLogoutComponent implements OnInit {
    private _apiService: ApiService;

    constructor(_apiService: ApiService) {
        this._apiService = _apiService;
    }

    ngOnInit() {
        this._apiService.loggedIn = false;
    }
}
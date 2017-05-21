import { Component, OnDestroy } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'user-login',
    templateUrl: './user.login.component.html'
})
export class UserLoginComponent implements OnDestroy {
    email: string;
    password: string;
    result: object = {};
    private subsription: any;
    private _apiService: ApiService;

    constructor(_apiService: ApiService) {
        this._apiService = _apiService;
    }

    login() {
        this.subsription = this._apiService.login(this.email, this.password).subscribe(
            result => {
                this.result = result;
                
                if(this.result['loggedin'] == true) {
                    this._apiService.loggedIn = true;
                }
            }
        );
    }

    ngOnDestroy() {
        if (this.subsription != undefined) {
            this.subsription.unsubscribe();
        }
    }
}
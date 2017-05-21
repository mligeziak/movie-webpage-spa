import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
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
    private _router: Router;

    constructor(_apiService: ApiService, _router: Router) {
        this._apiService = _apiService;
        this._router = _router;
    }

    login() {
        this.subsription = this._apiService.login(this.email, this.password).subscribe(
            result => {
                this.result = result;
                
                if(this.result['loggedin'] == true) {
                    this._apiService.loggedIn = true;
                    this._router.navigateByUrl('user/account');
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
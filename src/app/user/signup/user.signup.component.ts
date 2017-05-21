import { Component, OnDestroy } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'user-signup',
    templateUrl: './user.signup.component.html'
})
export class UserSignupComponent implements OnDestroy {
    email: string;
    name: string;
    password: string;
    result: object = {};
    private subsription: any;
    private _apiService: ApiService;

    constructor(_apiService: ApiService) {
        this._apiService = _apiService;
    }

    signUp() {
        this.subsription = this._apiService.signUp(this.email, this.name, this.password).subscribe(
            result => this.result = result
        );
    }

    ngOnDestroy() {
        if (this.subsription != undefined) {
            this.subsription.unsubscribe();
        }
    }
}
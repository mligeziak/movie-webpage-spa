import { Component, OnDestroy } from '@angular/core';
import { UsersApiService } from '../../services/users.api.service';

@Component({
    selector: 'user-login',
    templateUrl: './user.login.component.html'
})
export class UserLoginComponent implements OnDestroy {
    email: string;
    password: string;
    result: object = {};
    private subsription: any;
    private _usersApiService: UsersApiService;

    constructor(_usersApiService: UsersApiService) {
        this._usersApiService = _usersApiService;
    }

    login() {
        this.subsription = this._usersApiService.login(this.email, this.password).subscribe(
            result => this.result = result
        );
    }

    ngOnDestroy() {
        if (this.subsription != undefined) {
            this.subsription.unsubscribe();
        }
    }
}
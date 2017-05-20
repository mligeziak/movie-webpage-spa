import { Component, OnDestroy } from '@angular/core';
import { UsersApiService } from '../../services/users.api.service';

@Component({
    selector: 'user-register',
    templateUrl: './user.signup.component.html'
})
export class UserSignupComponent implements OnDestroy {
    email: string;
    name: string;
    password: string;
    result: object = {};
    private subsription: any;
    private _usersApiService: UsersApiService;

    constructor(_usersApiService: UsersApiService) {
        this._usersApiService = _usersApiService;
    }

    signUp() {
        this.subsription = this._usersApiService.signUp(this.email, this.name, this.password).subscribe(
            result => this.result = result
        );
    }

    ngOnDestroy() {
        if (this.subsription != undefined) {
            this.subsription.unsubscribe();
        }
    }
}
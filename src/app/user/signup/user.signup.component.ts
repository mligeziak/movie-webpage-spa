import { Component } from '@angular/core';

@Component({
    selector: 'user-register',
    templateUrl: './user.signup.component.html'
})
export class UserSignupComponent {
    email: string;
    name: string;
    password: string;

    signUp() {
    }
}
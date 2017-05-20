import { Component } from '@angular/core';

@Component({
    selector: 'user-register',
    templateUrl: './user.register.component.html'
})
export class UserRegisterComponent {
    email: string;
    name: string;
    password: string;

    signUp() {
    }
}
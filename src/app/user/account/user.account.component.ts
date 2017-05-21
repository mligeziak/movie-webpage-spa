import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'user-account',
    templateUrl: './user.account.component.html'
})
export class UserAccountComponent implements OnInit, OnDestroy {
    email: string;
    name: string;
    accountData: object = {};
    private subsription: any;
    private _apiService: ApiService;

    constructor(_apiService: ApiService) {
        this._apiService = _apiService;
    }

    ngOnInit() {
        this.subsription = this._apiService.getAccountData().subscribe(
            accountData => {
                this.accountData = accountData['appuser'];
            }
        );
    }

    ngOnDestroy() {
        if (this.subsription != undefined) {
            this.subsription.unsubscribe();
        }
    }
}
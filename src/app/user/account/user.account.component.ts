import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { DynamicSearchBoxItemComponent } from '../../elements/dynamic-search-box/dynamic-search-box-item/dynamic-search-box-item.component';

@Component({
    selector: 'user-account',
    templateUrl: './user.account.component.html',
    entryComponents: [DynamicSearchBoxItemComponent]
})
export class UserAccountComponent implements OnInit, OnDestroy {
    email: string;
    name: string;
    accountData: object = {};
    myFavorites: object = {};
    private subsription: any;
    private favoritesSubsription: any;
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
        this.favoritesSubsription = this._apiService.getMyFavorites().subscribe(
            myFavorites => {
                this.myFavorites = myFavorites;
            }
        );
    }

    ngOnDestroy() {
        if (this.subsription != undefined) {
            this.subsription.unsubscribe();
        }
        if (this.favoritesSubsription != undefined) {
            this.favoritesSubsription.unsubscribe();
        }
    }
}
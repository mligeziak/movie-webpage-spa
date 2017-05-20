import { Component } from '@angular/core';
import { DynamicSearchBoxComponent } from '../elements/dynamic-search-box/dynamic-search-box.component';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    entryComponents: [DynamicSearchBoxComponent]
})
export class HomeComponent { }
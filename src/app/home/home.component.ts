import { Component } from '@angular/core';
import { DynamicSearchBoxComponent } from '../elements/dynamic-search-box/dynamic-search-box.component';

@Component({
    selector: 'home',
    template: require('./home.component.html'),
    entryComponents: [DynamicSearchBoxComponent]
})
export class HomeComponent {
    title: string = 'Home Page';
    body: string = 'This is the home body';
}
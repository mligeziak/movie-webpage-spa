import { Component, Input } from '@angular/core';

@Component({
    selector: 'dynamic-search-box',
    template: require('./dynamic-search-box.component.html')
})
export class DynamicSearchBoxComponent {
    title: string = 'Dynamic search';
    query: string = 'test';
}
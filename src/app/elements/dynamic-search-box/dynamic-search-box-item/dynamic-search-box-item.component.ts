import { Component, Input } from '@angular/core';

@Component({
    selector: 'dynamic-search-box-item',
    templateUrl: './dynamic-search-box-item.component.html',
    styleUrls: ['./dynamic-search-box-item.component.scss']
})
export class DynamicSearchBoxItemComponent {
    @Input() movie: string;
}
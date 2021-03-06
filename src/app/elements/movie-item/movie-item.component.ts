import { Component, Input } from '@angular/core';

@Component({
    selector: 'movie-item',
    templateUrl: './movie-item.component.html',
    styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {
    @Input() movie: string;
}
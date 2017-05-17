import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'about',
    template: require('./about.component.html')
})
export class AboutComponent implements OnInit {
    title: string = 'About Page';
    body: string = 'Lorem ipsum';

    ngOnInit() {
    }
}
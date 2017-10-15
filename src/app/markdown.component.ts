import { Component, Input, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { markdown } from 'markdown';

@Component({
    selector: 'markdown',
    template: `<div [innerHtml]="html" #root></div>`
})
export class MarkdownComponent implements AfterViewInit {
    @ViewChild('root') root: ElementRef;
    html: string;

    @Input()
    set data(value: string) {
        this.html = markdown.toHTML(value);
    }

    constructor(private router: Router) { }

    ngAfterViewInit() {
        let links: HTMLAnchorElement[] = this.root.nativeElement.querySelectorAll('a');
        links.forEach(el => el.addEventListener('click', event => {
            if (location.origin === (<any>el).origin) {
                event.preventDefault();
                this.router.navigateByUrl(el.getAttribute('href'));
            }
        }));
    }
}
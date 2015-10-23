/// <reference path="typings/angular2/angular2-2.0.0-alpha.39.d.ts" />

import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';
import {RouterLink} from 'angular2/router'
import {MenuLink} from './models';

// Annotation section
@Component({
  selector: 'my-menu'
})
@View({
  directives: [NgFor, NgIf, RouterLink],
  template: ['<menu>',
             '<li *ng-for="#item of menuItems"> ',
                 '<a *ng-if="!!item.isRouterLink" [router-link]="[ item.href ]"> {{ item.label }}* </a> ',
                 '<a *ng-if=" !item.isRouterLink" target="_blank" href="{{ item.href }}"> {{ item.label }} </a> ',
               '</li>',
             '</menu> '].join('')
})
// Component controller
export class MenuComponent {
  menuItems: Array<MenuLink>;
  constructor() {
    this.menuItems = [
      new MenuLink('résumé', 'https://sreal.github.io/resume'),
      new MenuLink('résumé2', './Resume', true),
      new MenuLink('projects', './Projects', true),
      new MenuLink('pictures', 'https://www.flickr.com/photos/sreal'),
      new MenuLink('contact', 'https://twitter.com/sreal')
    ];
  }
}

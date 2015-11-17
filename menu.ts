/// <reference path="typings/angular2/angular2-2.0.0-alpha.39.d.ts" />

import {Component, View, bootstrap, NgFor, NgIf, NgClass} from 'angular2/angular2';
import {RouterLink} from 'angular2/router'
import {MenuLink} from './models';

// Annotation section
@Component({
  selector: 'my-menu'
})
@View({
  directives: [NgFor, NgIf, NgClass, RouterLink],
  template: ['<menu>',
             '<li *ng-for="#item of menuItems"> ',
                 '<a *ng-if="!!item.isRouterLink" [router-link]="[ item.href ]"> {{ item.label }} </a> ',
                 '<a *ng-if=" !item.isRouterLink" target="_blank" href="{{ item.href }}"> {{ item.label }} </a> ',
               '</li>',
             '</menu> '].join('')
})
// Component controller
export class MenuComponent {
  menuItems: Array<MenuLink>;
  constructor() {
    var linkAs = {
      external: false,
      router: true
    };
    this.menuItems = [
      new MenuLink('résumé', 'https://sreal.github.io/resume', linkAs.external),
      new MenuLink('pictures', 'https://www.flickr.com/photos/sreal', linkAs.external),
      new MenuLink('contact', 'https://twitter.com/sreal', linkAs.external),
      // new MenuLink('experiment a', './Conjugator', linkAs.router),
      // new MenuLink('experiment b', './ScreenSaver', linkAs.router),
      // new MenuLink('experiment -', './Testbed', linkAs.router),
    ];
  }
}

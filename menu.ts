/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {MenuLink} from './models';

// Annotation section
@Component({
  selector: 'my-menu'
})
@View({
  directives: [NgFor],
  template: ['<menu>',
               '<li *ng-for="#item of menuItems"> ',
                 '<a href="{{ item.href }}"> {{ item.label }} </a> ',
               '</li>',
             '</menu> '].join('')
})
// Component controller
export class MenuComponent {
  menuItems: Array<MenuLink>;
  constructor() {
    this.menuItems = [
      new MenuLink('résumé', 'https://sreal.github.io/resume'),
      new MenuLink('projects', '#', false),
      new MenuLink('contact', 'https://twitter.com/sreal', false)
    ];
  }
}
bootstrap(MenuComponent);

/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
// Annotation section
@Component({
  selector: 'my-menu'
})
@View({
  directives: [NgFor],
  template: '<menu><li *ng-for="#item of items"> {{ item }} </li></menu> '
})
// Component controller
export class MenuComponent {
  items: Array<string>;
  constructor() {
    this.items = [
      'projects',
      'résumé'
    ];
  }
}
bootstrap(MenuComponent);

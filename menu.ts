/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
// Annotation section
@Component({
  selector: 'my-menu'
})
@View({
  template: '<menu><li>résumé</li><li>projects</li></menu>'
})
// Component controller
class MyMenuComponent {
  // name: string;
  constructor() {
    // this.name = 'Principessa';
  }
}
bootstrap(MyMenuComponent);

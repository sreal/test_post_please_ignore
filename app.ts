/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
// Annotation section
@Component({
  selector: 'my-app'
})
@View({
  template: '<h1 (click)="message()">{{ name }}</h1>'
})
// Component controller
class MyAppComponent {
  name: string;
  constructor() {
    this.name = 'simon richard eames';
  }
  message = function () {
    if (document.body.className) {
      document.body.className = "";
    } else {
      document.body.className = "night";
    }
  };

}
bootstrap(MyAppComponent);

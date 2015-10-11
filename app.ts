/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {MenuComponent} from './menu';
import {ProjectsComponent} from './projects';
import {ResumeComponent} from './resume';
// Annotation section
@Component({
  selector: 'my-app'
})
@View({
  template: ['<div>',
               '<h1 (click)="message()"> {{ name }} </h1>',
               '<my-menu></my-menu>',
               '<projects></projects>',
               '<resume></resume>',
             '</div>'].join(''),
  directives: [MenuComponent, ProjectsComponent, ResumeComponent]
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

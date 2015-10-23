/// <reference path="typings/angular2/angular2-2.0.0-alpha.39.d.ts" />
/// <reference path="typings/angular2/router-2.0.0-alpha.39.d.ts" />

import {Component, View, bootstrap, bind} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, routerBindings} from 'angular2/router'

import {MenuComponent} from './menu';
import {ConstructionComponent} from './construction';
import {ResumeComponent} from './resume';
import {ProjectsComponent} from './projects';

// Annotation section
@Component({
  selector: 'my-app',
})
@View({
  template: ['<div>',
               '<h1 (click)="message()"> {{ name }} </h1>',
               '<my-menu></my-menu>',
               '<construction></construction>',
               '<router-outlet></router-outlet>',
             '</div>'].join(''),
  directives: [ROUTER_DIRECTIVES, MenuComponent, ConstructionComponent]
})
@RouteConfig([
  // { path: '/', redirectTo:'Projects' },
  { path: '/resume',   as: 'Resume', component: ResumeComponent },
  { path: '/projects', as: 'Projects', component: ProjectsComponent }
])
// Component controller
export class MyAppComponent {
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
bootstrap(MyAppComponent, [routerBindings(MyAppComponent)]);
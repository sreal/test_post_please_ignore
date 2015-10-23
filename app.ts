/// <reference path="typings/angular2/angular2-2.0.0-alpha.39.d.ts" />
/// <reference path="typings/angular2/router-2.0.0-alpha.39.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

// import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {ROUTER_DIRECTIVES, RouteConfig, Router, Location, Route} from 'angular2/router';

import {MenuComponent} from './menu';
import {ConstructionComponent} from './construction';
import {ResumeComponent} from './resume';
import {ProjectsComponent} from './projects';

// Annotation section
@Component({
  selector: 'my-app'
})
@View({
  template: ['<div>',
               '<h1 (click)="message()"> {{ name }} </h1>',
               '<my-menu></my-menu>',
               '<construction></construction>',
               '<router-outlet></router-outlet>',
             '</div>'].join(''),
  directives: [MenuComponent, ConstructionComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/',          redirectTo: '/projects' },
  { path: '/projects',  as: 'projects', component: ProjectsComponent },
  { path: '/resume',    as: 'login',    component: ResumeComponent },
])
// Component controller
export class MyAppComponent {
  name: string;
  constructor(public router: Router) {
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

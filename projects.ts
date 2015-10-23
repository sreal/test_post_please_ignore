/// <reference path="typings/angular2/angular2-2.0.0-alpha.39.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
// Annotation section
@Component({ selector: 'projects' })
@View({
  template: '<div><h6> Wants some rye? Course ya do. </h6></div>'
})
// Component controller
export class ProjectsComponent {
}
bootstrap(ProjectsComponent);

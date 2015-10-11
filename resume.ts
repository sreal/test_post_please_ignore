/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
// Annotation section
@Component({
  selector: 'resume'
})
@View({
  template: '<h6> Baseball diamond? </h6>'
})
// Component controller
export class ResumeComponent {
}
bootstrap(ResumeComponent);

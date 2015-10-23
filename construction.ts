/// <reference path="typings/angular2/angular2-2.0.0-alpha.39.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
// Annotation section
@Component({ selector: 'construction' })
@View({
  template: '<div class="construction"><h6> <div>build in progress.</div> <div><small>so don\'t expect everything to work.</small></div> </h6></div>'
})
// Component controller
export class ConstructionComponent {
}

/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
// Annotation section
@Component({ selector: 'construction' })
@View({
  template: '<div class="construction"><h5> <div>build in progress.</div> <div><small>so don\'t expect everything to work.</small></div> </h5></div>'
})
// Component controller
export class ConstructionComponent {
}
bootstrap(ConstructionComponent);

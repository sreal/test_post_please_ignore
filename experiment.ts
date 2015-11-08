/// <reference path="typings/angular2/angular2-2.0.0-alpha.39.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'experiment',
  properties: ['summary']
})
@View({
  template: ['<div>',
                 '<h2>{{ summary.title }}</h2>',
                 '<p> {{ summary.description }} </p>',
                 '<ng-content></ng-content>',
             '</div>'].join('')
})
// Component controller
export class ExperimentComponent {
}

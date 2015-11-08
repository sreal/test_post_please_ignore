/// <reference path="typings/angular2/angular2-2.0.0-alpha.39.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {ExperimentSummary} from './models';
import {ExperimentComponent} from './experiment';

// Annotation section
@Component({ selector: 'testbed' })
@View({
  directives: [ExperimentComponent],
  template: ['<div>',
                 '<experiment [summary]="summary"> <small>{{ content }}</small> </experiment>',
             '</div>'].join('')
})
// Component controller
export class TestbedComponent {
  summary: ExperimentSummary;
  content: string;
  constructor() {
    this.summary = new ExperimentSummary(
      "testbed",
      "experimentation with the basic features and changes in angularjs two compared to one"
    );
    this.content = "transclude is `ng-content`.  shazam!!!";
  }
}

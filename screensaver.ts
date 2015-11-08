/// <reference path="typings/angular2/angular2-2.0.0-alpha.39.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {ExperimentSummary} from './models';
import {ExperimentComponent} from './experiment';

// Annotation section
@Component({ selector: 'screen-saver' })
@View({
  directives: [ExperimentComponent],
  template: ['<div>',
             '<experiment [summary]="summary">',
             '// TODO: ... ... ...',
             '</experiment>',
             '</div>'].join('')
})
// Component controller
export class ScreenSaverComponent {
  summary: ExperimentSummary;
  constructor() {
    this.summary = new ExperimentSummary(
      "slideshow",
      "display progressive images from web source in full screen"
    );
  }
}

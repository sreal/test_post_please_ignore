/// <reference path="typings/angular2/angular2-2.0.0-alpha.39.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var models_1 = require('./models');
var experiment_1 = require('./experiment');
// Annotation section
var ConjugatorComponent = (function () {
    function ConjugatorComponent() {
        this.summary = new models_1.ExperimentSummary("conjugator", "experiment in french conjugaison for memorization and quick recall");
    }
    ConjugatorComponent = __decorate([
        angular2_1.Component({ selector: 'screen-saver' }),
        angular2_1.View({
            directives: [experiment_1.ExperimentComponent],
            template: ['<div>',
                '<experiment [summary]="summary">',
                '</experiment>',
                '</div>'].join('')
        }), 
        __metadata('design:paramtypes', [])
    ], ConjugatorComponent);
    return ConjugatorComponent;
})();
exports.ConjugatorComponent = ConjugatorComponent;

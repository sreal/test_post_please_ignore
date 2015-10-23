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
/// <reference path="typings/angular2/angular2-2.0.0-alpha.39.d.ts" />
var angular2_1 = require('angular2/angular2');
// Annotation section
var ProjectsComponent = (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent = __decorate([
        angular2_1.Component({ selector: 'projects' }),
        angular2_1.View({
            template: '<div><h6> Wants some rye? Course ya do. </h6></div>'
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectsComponent);
    return ProjectsComponent;
})();
exports.ProjectsComponent = ProjectsComponent;
angular2_1.bootstrap(ProjectsComponent);

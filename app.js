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
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var menu_1 = require('./menu');
var projects_1 = require('./projects');
var resume_1 = require('./resume');
var construction_1 = require('./construction');
// Annotation section
var MyAppComponent = (function () {
    function MyAppComponent() {
        this.message = function () {
            if (document.body.className) {
                document.body.className = "";
            }
            else {
                document.body.className = "night";
            }
        };
        this.name = 'simon richard eames';
    }
    MyAppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            template: ['<div>',
                '<h1 (click)="message()"> {{ name }} </h1>',
                '<construction></construction>',
                '<my-menu></my-menu>',
                '<projects></projects>',
                '<resume></resume>',
                '</div>'].join(''),
            directives: [menu_1.MenuComponent, projects_1.ProjectsComponent, resume_1.ResumeComponent, construction_1.ConstructionComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MyAppComponent);
    return MyAppComponent;
})();
angular2_1.bootstrap(MyAppComponent);

/// <reference path="typings/angular2/angular2-2.0.0-alpha.39.d.ts" />
/// <reference path="typings/angular2/router-2.0.0-alpha.39.d.ts" />
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
// import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
var router_1 = require('angular2/router');
var menu_1 = require('./menu');
var construction_1 = require('./construction');
var resume_1 = require('./resume');
var projects_1 = require('./projects');
// Annotation section
var MyAppComponent = (function () {
    function MyAppComponent(router) {
        this.router = router;
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
                '<my-menu></my-menu>',
                '<construction></construction>',
                '<router-outlet></router-outlet>',
                '</div>'].join(''),
            directives: [menu_1.MenuComponent, construction_1.ConstructionComponent, router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/', redirectTo: '/projects' },
            { path: '/projects', as: 'projects', component: projects_1.ProjectsComponent },
            { path: '/resume', as: 'login', component: resume_1.ResumeComponent },
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], MyAppComponent);
    return MyAppComponent;
})();
exports.MyAppComponent = MyAppComponent;
angular2_1.bootstrap(MyAppComponent);

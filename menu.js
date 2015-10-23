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
var router_1 = require('angular2/router');
var models_1 = require('./models');
// Annotation section
var MenuComponent = (function () {
    function MenuComponent() {
        this.menuItems = [
            new models_1.MenuLink('résumé', 'https://sreal.github.io/resume'),
            new models_1.MenuLink('résumé2', './Resume', true),
            new models_1.MenuLink('projects', './Projects', true),
            new models_1.MenuLink('pictures', 'https://www.flickr.com/photos/sreal'),
            new models_1.MenuLink('contact', 'https://twitter.com/sreal')
        ];
    }
    MenuComponent = __decorate([
        angular2_1.Component({
            selector: 'my-menu'
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor, angular2_1.NgIf, router_1.RouterLink],
            template: ['<menu>',
                '<li *ng-for="#item of menuItems"> ',
                '<a *ng-if="!!item.isRouterLink" [router-link]="[ item.href ]"> {{ item.label }}* </a> ',
                '<a *ng-if=" !item.isRouterLink" target="_blank" href="{{ item.href }}"> {{ item.label }} </a> ',
                '</li>',
                '</menu> '].join('')
        }), 
        __metadata('design:paramtypes', [])
    ], MenuComponent);
    return MenuComponent;
})();
exports.MenuComponent = MenuComponent;

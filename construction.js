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
// Annotation section
var ConstructionComponent = (function () {
    function ConstructionComponent() {
    }
    ConstructionComponent = __decorate([
        angular2_1.Component({ selector: 'construction' }),
        angular2_1.View({
            template: '<div class="construction"><h6> <div>build in progress.</div> <div><small>so don\'t expect everything to work.</small></div> </h6></div>'
        }), 
        __metadata('design:paramtypes', [])
    ], ConstructionComponent);
    return ConstructionComponent;
})();
exports.ConstructionComponent = ConstructionComponent;
angular2_1.bootstrap(ConstructionComponent);

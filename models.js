var MenuLink = (function () {
    function MenuLink(label, href, isRouterLink) {
        if (isRouterLink === void 0) { isRouterLink = false; }
        this.label = label;
        this.href = href;
        this.isRouterLink = !!isRouterLink;
    }
    return MenuLink;
})();
exports.MenuLink = MenuLink;
var ExperimentSummary = (function () {
    function ExperimentSummary(title, description) {
        this.title = title;
        this.description = description;
    }
    return ExperimentSummary;
})();
exports.ExperimentSummary = ExperimentSummary;

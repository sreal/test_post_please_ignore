var MenuLink = (function () {
    function MenuLink(label, href, enabled) {
        if (enabled === void 0) { enabled = true; }
        this.label = label;
        this.href = href;
        this.enabled = (typeof enabled === 'undefined') ? true : !!enabled;
    }
    return MenuLink;
})();
exports.MenuLink = MenuLink;

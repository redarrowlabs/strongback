"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = require("react");
var default_loader_1 = require("./default-loader");
var Implementation = default_loader_1.Loader;
function setLoader(component) {
    Implementation = component;
}
exports.setLoader = setLoader;
var Loader = (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        return _super.apply(this, arguments) || this;
    }
    Loader.prototype.render = function () {
        return React.createElement(Implementation, __assign({}, this.props));
    };
    return Loader;
}(React.Component));
exports.Loader = Loader;
//# sourceMappingURL=loader.js.map
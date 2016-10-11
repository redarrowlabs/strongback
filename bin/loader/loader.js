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
var DefaultLoader = (function (_super) {
    __extends(DefaultLoader, _super);
    function DefaultLoader() {
        _super.apply(this, arguments);
    }
    DefaultLoader.prototype.render = function () {
        throw new Error("\n        No loader implementation has been specified. To fix this:\n        A) call useDefaultImplementations\n        or\n        B) call setLoader to specify a loader component.\n        ");
    };
    return DefaultLoader;
}(React.Component));
;
var Implementation = DefaultLoader;
function setLoader(component) {
    Implementation = component;
}
exports.setLoader = setLoader;
var Loader = (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        _super.apply(this, arguments);
    }
    Loader.prototype.render = function () {
        return React.createElement(Implementation, __assign({}, this.props));
    };
    return Loader;
}(React.Component));
exports.Loader = Loader;
//# sourceMappingURL=loader.js.map
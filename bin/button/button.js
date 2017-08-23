"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
exports.__esModule = true;
var React = require("react");
var loader_1 = require("../loader/loader");
var classNames = require("classnames");
function Button(props) {
    var children = props.children, loading = props.loading, _a = props.type, type = _a === void 0 ? 'button' : _a, classes = props.classes, rest = __rest(props, ["children", "loading", "type", "classes"]);
    var buttonClass = getClasses(props);
    var disabled = loading || rest.disabled;
    var loader = loading
        ? React.createElement(loader_1.Loader, null)
        : null;
    return React.createElement("button", __assign({}, rest, { className: buttonClass, type: type, disabled: disabled }),
        loader,
        React.createElement("div", null, children));
}
exports.Button = Button;
function getClasses(props) {
    var classes = props.classes;
    if (!classes) {
        return '';
    }
    var always = classes.always, disabled = classes.disabled, enabled = classes.enabled, loading = classes.loading;
    var isDisabled = props.loading || props.disabled;
    return classNames((_a = {},
        _a[always] = !!always,
        _a[enabled] = !!enabled && !isDisabled,
        _a[disabled] = !!disabled && isDisabled,
        _a[loading] = !!loading && props.loading,
        _a));
    var _a;
}
//# sourceMappingURL=button.js.map
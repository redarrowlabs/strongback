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
var loader_1 = require("../loader/loader");
var classNames = require("classnames");
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        _super.call(this, props);
    }
    Button.prototype.render = function () {
        var _a = this.props, children = _a.children, _b = _a.loading, loading = _b === void 0 ? false : _b;
        var rest = restOp(this.props);
        var buttonClass = getClasses(this.props);
        var disabled = loading || rest.disabled;
        var loader = loading
            ? React.createElement(loader_1.Loader, { size: loaderSize, color: loaderColor })
            : null;
        return React.createElement("button", __assign({ className: buttonClass }, rest, { disabled: disabled }),
            loader,
            children);
    };
    return Button;
}(React.Component));
exports.Button = Button;
function getClasses(props) {
    if (props.variant === "secondary") {
        if (props.loading) {
            return secondLoadingClass;
        }
        if (props.disabled) {
            return secondInactiveClass;
        }
        return secondActiveClass;
    }
    if (props.loading) {
        return loadingClass;
    }
    if (props.disabled) {
        return inactiveClass;
    }
    return activeClass;
}
//TODO provide customization options
var loaderColor = '#ffffff';
var loaderSize = '0.75em';
var inactiveClass = defaultPrimaryClasses(false);
var loadingClass = defaultPrimaryClasses(false);
var activeClass = defaultPrimaryClasses(true);
var secondInactiveClass = defaultSecondaryClasses(false);
var secondLoadingClass = defaultSecondaryClasses(false);
var secondActiveClass = defaultSecondaryClasses(true);
function defaultPrimaryClasses(active) {
    return classNames({
        'o-button o-button--primary': true,
        'o-button--active': active,
        'o-button--disabled ': !active
    });
}
function defaultSecondaryClasses(active) {
    return classNames({
        'o-button o-button--secondary': true,
        'o-button--active': active,
        'o-button--disabled ': !active
    });
}
function restOp(props) {
    //TODO Implement rest operator when it lands in typescript
    //https://github.com/Microsoft/TypeScript/issues/10727
    //https://github.com/Microsoft/TypeScript/pull/11150
    var p = Object.assign({}, props);
    delete p.loading;
    delete p.variant;
    return p;
}
//# sourceMappingURL=button.js.map
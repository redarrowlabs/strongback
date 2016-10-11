"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const React = require("react");
const loader_1 = require("../loader/loader");
const classNames = require("classnames");
class Button extends React.Component {
    constructor(props) { super(props); }
    render() {
        const { children, loading = false } = this.props;
        const rest = restOp(this.props);
        const buttonClass = getClasses(this.props);
        const disabled = loading || rest.disabled;
        const loader = loading
            ? React.createElement(loader_1.Loader, { size: loaderSize, color: loaderColor })
            : null;
        return React.createElement("button", __assign({ className: buttonClass }, rest, { disabled: disabled }),
            loader,
            children);
    }
}
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
const loaderColor = '#ffffff';
const loaderSize = '0.75em';
const inactiveClass = defaultPrimaryClasses(false);
const loadingClass = defaultPrimaryClasses(false);
const activeClass = defaultPrimaryClasses(true);
const secondInactiveClass = defaultSecondaryClasses(false);
const secondLoadingClass = defaultSecondaryClasses(false);
const secondActiveClass = defaultSecondaryClasses(true);
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
    const p = Object.assign({}, props);
    delete p.loading;
    delete p.variant;
    return p;
}
//# sourceMappingURL=button.js.map
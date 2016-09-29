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
const halogen_1 = require("halogen");
const classnames_1 = require("classnames");
//TODO provide customization options
const loaderColor = '#000000';
const loaderSize = '0.75em';
const inactiveClass = defaultClasses(false);
const loadingClass = defaultClasses(false);
const activeClass = defaultClasses(true);
function defaultClasses(active) {
    return classnames_1.default({
        'f6 bw0 link dim br2 ph3 pv2 mb2 dib white': true,
        'bg-purple pointer': active,
        'bg-mid-gray ': !active
    });
}
class Button extends React.Component {
    constructor(props) { super(props); }
    render() {
        const { children, loading = false } = this.props;
        const rest = restOp(this.props);
        const buttonClass = getClasses(this.props);
        const disabled = loading || rest.disabled;
        const loader = loading
            ? React.createElement(halogen_1.PulseLoader, { size: loaderSize, color: loaderColor })
            : null;
        return React.createElement("button", __assign({ className: buttonClass }, rest, { disabled: disabled }),
            loader,
            children);
    }
}
exports.Button = Button;
function getClasses(props) {
    if (props.loading) {
        return loadingClass;
    }
    if (props.disabled) {
        return inactiveClass;
    }
    return activeClass;
}
function restOp(props) {
    //TODO Implement rest operator when it lands in typescript
    //https://github.com/Microsoft/TypeScript/issues/10727
    //https://github.com/Microsoft/TypeScript/pull/11150
    const p = Object.assign({}, props);
    delete p.loading;
    return p;
}

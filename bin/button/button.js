var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from 'react';
import { PulseLoader } from 'halogen';
import classNames from 'classnames';
//TODO provide customization options
const loaderColor = '#000000';
const loaderSize = '0.75em';
const inactiveClass = defaultClasses(false);
const loadingClass = defaultClasses(false);
const activeClass = defaultClasses(true);
function defaultClasses(active) {
    return classNames({
        'f6 bw0 link dim br2 ph3 pv2 mb2 dib white': true,
        'bg-purple pointer': active,
        'bg-mid-gray ': !active
    });
}
export class Button extends React.Component {
    constructor(props) { super(props); }
    render() {
        const { children, loading = false } = this.props;
        const rest = restOp(this.props);
        const buttonClass = getClasses(this.props);
        const disabled = loading || rest.disabled;
        const loader = loading
            ? React.createElement(PulseLoader, { size: loaderSize, color: loaderColor })
            : null;
        return React.createElement("button", __assign({ className: buttonClass }, rest, { disabled: disabled }),
            loader,
            children);
    }
}
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

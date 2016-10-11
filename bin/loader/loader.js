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
class DefaultLoader extends React.Component {
    render() {
        throw new Error(`
        No loader implementation has been specified. To fix this:
        A) call useDefaultImplementations
        or
        B) call setLoader to specify a loader component.
        `);
    }
}
;
let Implementation = DefaultLoader;
function setLoader(component) {
    Implementation = component;
}
exports.setLoader = setLoader;
class Loader extends React.Component {
    render() {
        return React.createElement(Implementation, __assign({}, this.props));
    }
}
exports.Loader = Loader;
//# sourceMappingURL=loader.js.map
"use strict";
exports.__esModule = true;
var React = require("react");
var ReactSelect = require("react-select");
function isOptArray(option) {
    return Array.isArray(option);
}
exports.SelectControl = function (props) {
    var _a = props.input, _b = _a.value, value = _b === void 0 ? '' : _b, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, _c = props.options, options = _c.options, multi = _c.multi, className = _c.className;
    return React.createElement(ReactSelect, { className: className, options: options, value: value, multi: multi, onChange: function (v) { return onChange(valueOrDefault(v)); }, onBlur: onBlur, onFocus: onFocus });
};
function valueOrDefault(option) {
    if (!option) {
        return '';
    }
    if (isOptArray(option)) {
        return option.map(function (x) { return x.value; });
    }
    return option.value;
}
//# sourceMappingURL=select.ctrl.js.map
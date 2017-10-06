"use strict";
exports.__esModule = true;
var React = require("react");
exports.TextControl = function (props) {
    var _a = props.input, _b = _a.value, value = _b === void 0 ? '' : _b, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, _c = props.options, multiline = _c.multiline, className = _c.className, autoComplete = _c.autoComplete;
    var control = multiline
        ? React.createElement("textarea", { value: value, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: className })
        : React.createElement("input", { type: 'text', value: value, onChange: onChange, onBlur: onBlur, onFocus: onFocus, autoComplete: autoComplete, className: className });
    return control;
};
//# sourceMappingURL=text.ctrl.js.map
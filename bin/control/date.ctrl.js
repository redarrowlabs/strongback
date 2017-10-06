"use strict";
exports.__esModule = true;
var React = require("react");
exports.DateControl = function (props) {
    var _a = props.input, _b = _a.value, value = _b === void 0 ? '' : _b, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, _c = props.options, className = _c.className, autoComplete = _c.autoComplete;
    return React.createElement("input", { type: 'date', value: value, onChange: handleChange(onChange), onBlur: onBlur, onFocus: onFocus, autoComplete: autoComplete, className: className });
};
function handleChange(fn) {
    return function (e) {
        var eventValue = e.target.value;
        var value = '';
        //limit years to 4 digits
        if (eventValue !== '') {
            var arr = eventValue.split('-');
            arr[0] = arr[0].substr(0, 4);
            value = arr.join('-');
        }
        fn(value);
    };
}
//# sourceMappingURL=date.ctrl.js.map
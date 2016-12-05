"use strict";
var React = require("react");
var redux_form_1 = require("redux-form");
var field_wrapper_1 = require("./field-wrapper");
function NumberFieldStateless(props) {
    var _a = props.input, value = _a.value, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus;
    return React.createElement(field_wrapper_1.FieldWrapper, { fieldProps: props },
        React.createElement("input", { type: 'text', value: value, onChange: onChange, onBlur: onBlur, onFocus: onFocus }));
}
exports.NumberFieldStateless = NumberFieldStateless;
function NumberField(props) {
    return React.createElement(redux_form_1.Field, { name: props.name, component: NumberFieldStateless, normalize: normalize, label: props.label });
}
exports.NumberField = NumberField;
/**
 * Expression to match numbers as they are typed
 * Allowed: '-', '-1', '-1.', '-1.2'
 */
var typableNumbers = /^[-|\d|\.]\d*\.?\d*$/;
function normalize(value, previous) {
    if (value === '') {
        return '';
    }
    if (typableNumbers.test(value)) {
        return value;
    }
    return previous;
}
//# sourceMappingURL=number-field.js.map
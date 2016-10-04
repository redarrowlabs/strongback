"use strict";
const React = require("react");
const redux_form_1 = require("redux-form");
const field_wrapper_1 = require("./field-wrapper");
function NumberFieldStateless(props) {
    const { input: { value, onChange, onBlur, onFocus } } = props;
    return React.createElement(field_wrapper_1.FieldWrapper, { fieldProps: props },
        React.createElement("input", { type: "text", value: value, onChange: onChange, onBlur: onBlur, onFocus: onFocus }));
}
exports.NumberFieldStateless = NumberFieldStateless;
function NumberField(props) {
    return React.createElement(redux_form_1.Field, { name: props.name, component: NumberFieldStateless, normalize: normalize, label: props.label });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NumberField;
/**
 * Expression to match numbers as they are typed
 * Allowed: '-', '-1', '-1.', '-1.2'
 */
const typableNumbers = /^[-|\d|\.]\d*\.?\d*$/;
function normalize(value, previous) {
    if (value == '') {
        return '';
    }
    if (typableNumbers.test(value)) {
        return value;
    }
    return previous;
}
//# sourceMappingURL=number-field.js.map
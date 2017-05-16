"use strict";
exports.__esModule = true;
var React = require("react");
var redux_form_1 = require("redux-form");
var field_wrapper_1 = require("./field-wrapper");
function TextFieldStateless(props) {
    var _a = props.input, value = _a.value, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus, autoComplete = props.autoComplete, multiline = props.multiline;
    var control = multiline
        ? React.createElement("textarea", { value: value, onChange: onChange, onBlur: onBlur, onFocus: onFocus })
        : React.createElement("input", { type: 'text', value: value, onChange: onChange, onBlur: onBlur, onFocus: onFocus, autoComplete: autoComplete });
    return React.createElement(field_wrapper_1.FieldWrapper, { fieldProps: props }, control);
}
exports.TextFieldStateless = TextFieldStateless;
function TextField(props) {
    return React.createElement(redux_form_1.Field, { name: props.name, component: TextFieldStateless, autoComplete: props.autoComplete || 'off', label: props.label, onBlur: props.onBlur, multiline: props.multiline });
}
exports.TextField = TextField;
//# sourceMappingURL=text-field.js.map
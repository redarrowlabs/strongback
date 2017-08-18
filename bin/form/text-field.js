"use strict";
exports.__esModule = true;
var React = require("react");
var redux_form_1 = require("redux-form");
var field_wrapper_1 = require("./field-wrapper");
var classNames = require("classnames");
function TextFieldStateless(props) {
    var _a = props.input, value = _a.value, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus, suffix = props.suffix, prefix = props.prefix, autoComplete = props.autoComplete, multiline = props.multiline, invalid = props.meta.invalid;
    var inputClass = classNames({
        'error': invalid
    });
    var suffixEl = suffix
        ? React.createElement("span", { className: "suffix" }, suffix)
        : null;
    var prefixEl = prefix
        ? React.createElement("span", { className: "prefix" }, prefix)
        : null;
    var control = multiline
        ? React.createElement("textarea", { value: value, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: inputClass })
        : React.createElement("input", { type: 'text', value: value, onChange: onChange, onBlur: onBlur, onFocus: onFocus, autoComplete: autoComplete, className: inputClass });
    return React.createElement(field_wrapper_1.FieldWrapper, { fieldProps: props },
        prefixEl,
        control,
        suffixEl);
}
exports.TextFieldStateless = TextFieldStateless;
function TextField(props) {
    return React.createElement(redux_form_1.Field, { name: props.name, component: TextFieldStateless, autoComplete: props.autoComplete || 'off', label: props.label, onBlur: props.onBlur, multiline: props.multiline, help: props.help, suffix: props.suffix, prefix: props.prefix });
}
exports.TextField = TextField;
//# sourceMappingURL=text-field.js.map
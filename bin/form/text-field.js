"use strict";
exports.__esModule = true;
var React = require("react");
var redux_form_1 = require("redux-form");
var field_wrapper_1 = require("./field-wrapper");
var classNames = require("classnames");
function TextFieldStateless(props) {
    var _a = props.input, value = _a.value, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus, tooltipProps = props.tooltipProps, infoIconProps = props.infoIconProps, suffix = props.suffix, prefix = props.prefix, autoComplete = props.autoComplete, multiline = props.multiline, invalid = props.meta.invalid;
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
    return React.createElement(field_wrapper_1.FieldWrapper, { fieldProps: props, tooltipProps: tooltipProps, infoIconProps: infoIconProps },
        prefixEl,
        control,
        suffixEl);
}
exports.TextFieldStateless = TextFieldStateless;
function TextField(props) {
    var tooltipProps = props.tooltip
        ? {
            tooltip: props.tooltip,
            tooltipPosition: props.tooltipPosition,
            tooltipAlignment: props.tooltipAlignment
        }
        : null;
    var infoIconProps = props.iconContent
        ? {
            iconContent: props.iconContent,
            iconCustomTypeName: props.iconCustomTypeName
        }
        : null;
    return React.createElement(redux_form_1.Field, { name: props.name, component: TextFieldStateless, autoComplete: props.autoComplete || 'off', label: props.label, onBlur: props.onBlur, multiline: props.multiline, indicator: props.indicator, help: props.help, suffix: props.suffix, prefix: props.prefix, tooltipProps: tooltipProps, infoIconProps: infoIconProps });
}
exports.TextField = TextField;
//# sourceMappingURL=text-field.js.map
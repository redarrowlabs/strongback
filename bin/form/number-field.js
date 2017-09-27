"use strict";
exports.__esModule = true;
var React = require("react");
var redux_form_1 = require("redux-form");
var field_wrapper_1 = require("./field-wrapper");
function NumberFieldStateless(props) {
    var _a = props.input, value = _a.value, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus, invalid = props.meta.invalid, tooltipProps = props.tooltipProps, infoIconProps = props.infoIconProps, suffix = props.suffix, prefix = props.prefix;
    var invalidClassName = '';
    if (invalid) {
        invalidClassName = 'error';
    }
    var suffixEl = suffix
        ? React.createElement("span", { className: "suffix" }, suffix)
        : null;
    var prefixEl = prefix
        ? React.createElement("span", { className: "prefix" }, prefix)
        : null;
    return React.createElement(field_wrapper_1.FieldWrapper, { fieldProps: props, tooltipProps: tooltipProps, infoIconProps: infoIconProps },
        prefixEl,
        React.createElement("input", { type: 'text', value: value, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: invalidClassName }),
        suffixEl);
}
exports.NumberFieldStateless = NumberFieldStateless;
function NumberField(props) {
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
    return React.createElement(redux_form_1.Field, { name: props.name, component: NumberFieldStateless, normalize: normalize, label: props.label, onBlur: props.onBlur, help: props.help, indicator: props.indicator, suffix: props.suffix, prefix: props.prefix, tooltipProps: tooltipProps, infoIconProps: infoIconProps });
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
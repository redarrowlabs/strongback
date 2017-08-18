"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var classNames = require("classnames");
/** Wraps a field with a label and error message area. */
var FieldWrapper = (function (_super) {
    __extends(FieldWrapper, _super);
    function FieldWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FieldWrapper.prototype.render = function () {
        var _a = this.props, _b = _a.fieldProps, _c = _b.meta, touched = _c.touched, error = _c.error, help = _b.help, label = _b.label, indicator = _b.indicator, children = _a.children, mode = _a.mode;
        var labelClass = classNames({
            'error': touched && (error !== '')
        });
        //For multiple inputs in children
        if (mode === 'no-wrap') {
            return React.createElement("div", null,
                React.createElement("label", { className: labelClass },
                    React.createElement(FieldLabel, { label: label, indicator: indicator })),
                children,
                React.createElement(HelpArea, { text: help }),
                React.createElement(FieldError, { error: error, touched: touched }));
        }
        return React.createElement("div", null,
            React.createElement("label", { className: labelClass },
                React.createElement(FieldLabel, { label: label, indicator: indicator }),
                children),
            React.createElement(HelpArea, { text: help }),
            React.createElement(FieldError, { error: error, touched: touched }));
    };
    return FieldWrapper;
}(React.Component));
exports.FieldWrapper = FieldWrapper;
/** The label of the field, including indicators. */
function FieldLabel(props) {
    var label = props.label, indicator = props.indicator;
    var indicatorEl = null;
    if (indicator === 'optional') {
        indicatorEl = React.createElement("span", null, "(optional)");
    }
    if (indicator === 'required') {
        indicatorEl = React.createElement("span", null, "*");
    }
    var indicatorClass = classNames({
        'optional': props.indicator === 'optional',
        'required': props.indicator === 'required'
    });
    return React.createElement("div", { className: indicatorClass },
        label,
        " ",
        indicatorEl);
}
/** The error message section of a field. */
function FieldError(props) {
    var touched = props.touched, error = props.error;
    if (touched && error) {
        return React.createElement("div", { className: 'error-message' }, error);
    }
    return null;
}
/** An element that shows some helper text or an info tip. */
function HelpArea(props) {
    var text = props.text;
    var helpTextLength = (text || '').length;
    if (helpTextLength > 50) {
        return React.createElement("div", null,
            React.createElement("span", { className: 'help-icon' }),
            React.createElement("div", { className: 'helper-text' }, text));
    }
    return React.createElement("div", { className: 'helper-text' }, text);
}
//# sourceMappingURL=field-wrapper.js.map
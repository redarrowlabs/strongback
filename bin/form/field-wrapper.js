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
var tooltip_1 = require("../tooltip/tooltip");
var classNames = require("classnames");
/** Wraps a field with a label and help text and error message area. */
var FieldWrapper = (function (_super) {
    __extends(FieldWrapper, _super);
    function FieldWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FieldWrapper.prototype.render = function () {
        var _a = this.props, _b = _a.fieldProps, _c = _b.meta, touched = _c.touched, error = _c.error, help = _b.help, label = _b.label, indicator = _b.indicator, tooltipProps = _a.tooltipProps, children = _a.children, mode = _a.mode;
        var labelClass = classNames({
            'error': touched && (error !== '')
        });
        var helpEl = null;
        if (help != null) {
            helpEl = React.createElement("div", { className: 'c-form-field--help-text' }, help);
        }
        //For multiple inputs in children
        if (mode === 'no-wrap') {
            return React.createElement("div", { className: 'c-form-field' },
                React.createElement("label", { className: labelClass },
                    React.createElement(FieldLabel, { label: label, indicator: indicator, tooltipProps: tooltipProps })),
                children,
                helpEl,
                React.createElement(FieldError, { error: error, touched: touched }));
        }
        return React.createElement("div", { className: 'c-form-field' },
            React.createElement("label", { className: labelClass },
                React.createElement(FieldLabel, { label: label, indicator: indicator, tooltipProps: tooltipProps }),
                children),
            helpEl,
            React.createElement(FieldError, { error: error, touched: touched }));
    };
    return FieldWrapper;
}(React.Component));
exports.FieldWrapper = FieldWrapper;
/** The label of the field, including indicators. */
function FieldLabel(props) {
    var label = props.label, indicator = props.indicator, tooltipProps = props.tooltipProps;
    var indicatorEl = null;
    if (indicator === 'optional') {
        indicatorEl = React.createElement("span", { className: 'indicator' }, "(optional)");
    }
    if (indicator === 'required') {
        indicatorEl = React.createElement("span", { className: 'indicator' }, "*");
    }
    var indicatorClass = classNames({
        'optional': props.indicator === 'optional',
        'required': props.indicator === 'required'
    });
    var tooltipEl = null;
    if (tooltipProps != null) {
        tooltipEl = React.createElement(tooltip_1.Tooltip, { tooltip: tooltipProps.tooltip, tooltipAlignment: tooltipProps.tooltipAlignment, tooltipPosition: tooltipProps.tooltipPosition });
    }
    return React.createElement("div", { className: indicatorClass },
        label,
        " ",
        indicatorEl,
        " ",
        tooltipEl);
}
/** The error message section of a field. */
function FieldError(props) {
    var touched = props.touched, error = props.error;
    if (touched && error) {
        return React.createElement("div", { className: 'c-form-field--error-message' }, error);
    }
    return null;
}
//# sourceMappingURL=field-wrapper.js.map
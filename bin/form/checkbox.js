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
var react_widgets_1 = require("react-widgets");
var redux_form_1 = require("redux-form");
var field_wrapper_1 = require("./field-wrapper");
function CheckboxStateless(props) {
    var _a = props.input, value = _a.value, onChange = _a.onChange, options = props.options, tooltipProps = props.tooltipProps, infoIconProps = props.infoIconProps;
    return React.createElement(field_wrapper_1.FieldWrapper, { fieldProps: props, mode: 'no-wrap', tooltipProps: tooltipProps, infoIconProps: infoIconProps },
        React.createElement(react_widgets_1.SelectList, { data: options, value: value, onChange: onChange, multiple: true, valueField: 'value', textField: 'label' }));
}
exports.CheckboxStateless = CheckboxStateless;
/**
 * Checkbox is used to pick multiple values from a known set of options.
 */
var Checkbox = (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox(props) {
        return _super.call(this, props) || this;
    }
    Checkbox.prototype.render = function () {
        var tooltipProps = this.props.tooltip
            ? {
                tooltip: this.props.tooltip,
                tooltipPosition: this.props.tooltipPosition,
                tooltipAlignment: this.props.tooltipAlignment
            }
            : null;
        var infoIconProps = this.props.iconContent
            ? {
                iconContent: this.props.iconContent,
                iconCustomTypeName: this.props.iconCustomTypeName
            }
            : null;
        return React.createElement(redux_form_1.Field, { name: this.props.name, component: CheckboxStateless, label: this.props.label, options: this.props.options, help: this.props.help, indicator: this.props.indicator, tooltipProps: tooltipProps, infoIconProps: infoIconProps });
    };
    return Checkbox;
}(React.Component));
exports.Checkbox = Checkbox;
//# sourceMappingURL=checkbox.js.map
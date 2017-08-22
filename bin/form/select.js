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
var ReactSelect = require("react-select");
var redux_form_1 = require("redux-form");
var field_wrapper_1 = require("./field-wrapper");
var react_select_util_1 = require("./react-select-util");
function SelectStateless(props) {
    var _a = props.input, value = _a.value, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus, tooltipProps = props.tooltipProps, options = props.options, multi = props.multi;
    return React.createElement(field_wrapper_1.FieldWrapper, { fieldProps: props, tooltipProps: tooltipProps },
        React.createElement(ReactSelect, { options: options, value: value, multi: multi, onChange: function (v) { return onChange(valueOrDefault(v)); }, onBlur: function (e) { return onBlur(e); }, onFocus: onFocus }));
}
exports.SelectStateless = SelectStateless;
function valueOrDefault(option) {
    if (!option) {
        return '';
    }
    if (react_select_util_1.isOptArray(option)) {
        return option.map(function (x) { return x.value; });
    }
    return option.value;
}
/**
 * Select is used to pick a value from a known set of options.
 */
var Select = (function (_super) {
    __extends(Select, _super);
    function Select(props) {
        return _super.call(this, props) || this;
    }
    Select.prototype.render = function () {
        var tooltipProps = this.props.tooltip
            ? {
                tooltip: this.props.tooltip,
                tooltipPosition: this.props.tooltipPosition,
                tooltipAlignment: this.props.tooltipAlignment
            }
            : null;
        return React.createElement(redux_form_1.Field, { name: this.props.name, component: SelectStateless, label: this.props.label, options: this.props.options, multi: this.props.multi, onBlur: this.props.onBlur, help: this.props.help, indicator: this.props.indicator, tooltip: this.props.tooltip, tooltipProps: tooltipProps });
    };
    return Select;
}(React.Component));
exports.Select = Select;
//# sourceMappingURL=select.js.map
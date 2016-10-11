"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_widgets_1 = require("react-widgets");
var redux_form_1 = require("redux-form");
var field_wrapper_1 = require("./field-wrapper");
function RadioStateless(props) {
    var _a = props.input, value = _a.value, onChange = _a.onChange, options = props.options;
    return React.createElement(field_wrapper_1.FieldWrapper, { fieldProps: props, mode: "no-wrap" },
        React.createElement(react_widgets_1.SelectList, { data: options, value: value, onChange: onChange, valueField: 'value', textField: 'label' }));
}
exports.RadioStateless = RadioStateless;
/**
 * Radio is used to pick a single from a known set of options.
 */
var Radio = (function (_super) {
    __extends(Radio, _super);
    function Radio(props) {
        _super.call(this, props);
    }
    Radio.prototype.render = function () {
        return React.createElement(redux_form_1.Field, { name: this.props.name, component: RadioStateless, label: this.props.label, options: this.props.options });
    };
    return Radio;
}(React.Component));
exports.Radio = Radio;
//# sourceMappingURL=radio.js.map
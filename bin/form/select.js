"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactSelect = require("react-select");
var redux_form_1 = require("redux-form");
var field_wrapper_1 = require("./field-wrapper");
function SelectStateless(props) {
    var _a = props.input, value = _a.value, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus, options = props.options;
    return React.createElement(field_wrapper_1.FieldWrapper, { fieldProps: props },
        React.createElement(ReactSelect, { options: options, value: value, onChange: onChange, onBlur: function () { return onBlur(value); }, onFocus: onFocus }));
}
exports.SelectStateless = SelectStateless;
/**
 * Select is used to pick a value from a known set of options.
 */
var Select = (function (_super) {
    __extends(Select, _super);
    function Select(props) {
        return _super.call(this, props) || this;
    }
    Select.prototype.render = function () {
        return React.createElement(redux_form_1.Field, { name: this.props.name, component: SelectStateless, label: this.props.label, options: this.props.options });
    };
    return Select;
}(React.Component));
exports.Select = Select;
//# sourceMappingURL=select.js.map
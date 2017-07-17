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
var redux_form_1 = require("redux-form");
var field_wrapper_1 = require("./field-wrapper");
var DateFieldStateless = (function (_super) {
    __extends(DateFieldStateless, _super);
    function DateFieldStateless(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    DateFieldStateless.prototype.render = function () {
        var _a = this.props.input, value = _a.value, onBlur = _a.onBlur, onFocus = _a.onFocus;
        return React.createElement(field_wrapper_1.FieldWrapper, { fieldProps: this.props },
            React.createElement("input", { type: 'date', value: value, onChange: this.handleChange, onBlur: onBlur, onFocus: onFocus }));
    };
    DateFieldStateless.prototype.handleChange = function (e) {
        var eventValue = e.target.value;
        var value = '';
        //limit years to 4 digits
        if (eventValue !== '') {
            var arr = eventValue.split('-');
            arr[0] = arr[0].substr(0, 4);
            value = arr.join('-');
        }
        this.props.input.onChange(value);
    };
    return DateFieldStateless;
}(React.Component));
exports.DateFieldStateless = DateFieldStateless;
function DateField(props) {
    return React.createElement(redux_form_1.Field, { name: props.name, component: DateFieldStateless, label: props.label, onBlur: props.onBlur, help: props.help });
}
exports.DateField = DateField;
//# sourceMappingURL=date.js.map
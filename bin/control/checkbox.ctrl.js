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
var AnySelectList = react_widgets_1.SelectList;
var CheckboxControl = (function (_super) {
    __extends(CheckboxControl, _super);
    function CheckboxControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckboxControl.prototype.render = function () {
        var _a = this.props, _b = _a.input, _c = _b.value, value = _c === void 0 ? [] : _c, onChange = _b.onChange, _d = _a.options, classes = _d.classes, options = _d.options, renderItem = _d.renderItem;
        var renderFn = renderItem ? renderItem : function (x) { return React.createElement("span", null, x.item.label); };
        return React.createElement(AnySelectList, { className: classes.container, data: options, value: value, onChange: function (v) { return onChange(v.map(function (x) { return x.value; })); }, multiple: true, valueField: 'value', textField: 'label', itemComponent: renderFn, listProps: { className: classes.list } });
    };
    return CheckboxControl;
}(React.Component));
exports.CheckboxControl = CheckboxControl;
//# sourceMappingURL=checkbox.ctrl.js.map
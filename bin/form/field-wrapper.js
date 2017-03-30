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
/** Wraps a field with a label and error message area. */
var FieldWrapper = (function (_super) {
    __extends(FieldWrapper, _super);
    function FieldWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FieldWrapper.prototype.render = function () {
        var _a = this.props, _b = _a.fieldProps, _c = _b.meta, touched = _c.touched, error = _c.error, label = _b.label, children = _a.children, mode = _a.mode;
        var err = touched && error;
        //For multiple inputs in children
        if (mode === 'no-wrap') {
            return React.createElement("div", null,
                React.createElement("label", null,
                    React.createElement("div", null, label)),
                children,
                React.createElement("div", null, err));
        }
        return React.createElement("div", null,
            React.createElement("label", null,
                React.createElement("div", null, label),
                children),
            React.createElement("div", null, err));
    };
    return FieldWrapper;
}(React.Component));
exports.FieldWrapper = FieldWrapper;
//# sourceMappingURL=field-wrapper.js.map
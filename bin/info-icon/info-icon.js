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
/** Wraps a field with a label and help text and error message area. */
var InfoIcon = (function (_super) {
    __extends(InfoIcon, _super);
    function InfoIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InfoIcon.prototype.render = function () {
        var _a = this.props, _b = _a.iconContent, iconContent = _b === void 0 ? '?' : _b, iconCustomTypeName = _a.iconCustomTypeName;
        var iconClasses = "" + iconCustomTypeName;
        return React.createElement("span", { className: iconClasses, onClick: this.props.handleClick }, iconContent);
    };
    return InfoIcon;
}(React.Component));
exports.InfoIcon = InfoIcon;
//# sourceMappingURL=info-icon.js.map
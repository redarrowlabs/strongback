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
var Tooltip = (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tooltip.prototype.render = function () {
        var _a = this.props, _b = _a.tooltip, tooltip = _b === void 0 ? '' : _b, _c = _a.tooltipPosition, tooltipPosition = _c === void 0 ? 'top' : _c, _d = _a.tooltipAlignment, tooltipAlignment = _d === void 0 ? 'middle' : _d, _e = _a.tooltipCustomTypeName, tooltipCustomTypeName = _e === void 0 ? '' : _e;
        var tooltipCustomTypeClass = null;
        if (tooltipCustomTypeName != null) {
            tooltipCustomTypeClass = '-t-' + tooltipCustomTypeName;
        }
        var tooltipPlacement = "hint-" + tooltipPosition + "-" + tooltipAlignment + tooltipCustomTypeClass + " hint-fade-d-short hint-persist";
        return React.createElement("span", { "aria-label": tooltip, "data-hint": tooltip, className: tooltipPlacement },
            React.createElement("span", null));
    };
    return Tooltip;
}(React.Component));
exports.Tooltip = Tooltip;
//# sourceMappingURL=tooltip.js.map
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Loader = (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        return _super.apply(this, arguments) || this;
    }
    Loader.prototype.render = function () {
        return React.createElement("div", null, ". . .");
    };
    return Loader;
}(React.Component));
exports.Loader = Loader;
//# sourceMappingURL=default-loader.js.map
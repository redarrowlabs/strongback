"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_syntax_highlighter_1 = require("react-syntax-highlighter");
var styles_1 = require("react-syntax-highlighter/dist/styles");
var toast_service_1 = require("../toast/toast-service");
var clipboard_1 = require("../button/clipboard");
var Code = (function (_super) {
    __extends(Code, _super);
    function Code(props) {
        _super.call(this, props);
        this.handleCopy = this.handleCopy.bind(this);
    }
    Code.prototype.render = function () {
        var _a = this.props, _b = _a.language, language = _b === void 0 ? 'javascript' : _b, _c = _a.children, children = _c === void 0 ? '' : _c;
        var code = children;
        var copy = code
            ? React.createElement(clipboard_1.Clipboard, { text: code, onCopy: this.handleCopy }, "copy")
            : null;
        return React.createElement("div", null,
            React.createElement(react_syntax_highlighter_1["default"], { language: language, style: styles_1.tomorrowNight }, code || '[nothing]'),
            copy);
    };
    Code.prototype.handleCopy = function () {
        toast_service_1.info('Copied');
    };
    return Code;
}(React.Component));
exports.Code = Code;
//# sourceMappingURL=code.js.map
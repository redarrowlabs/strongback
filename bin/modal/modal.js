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
var ReactModal = require("react-modal");
var Modal = (function (_super) {
    __extends(Modal, _super);
    function Modal(props) {
        return _super.call(this, props) || this;
    }
    Modal.prototype.render = function () {
        var _a = this.props, isOpen = _a.isOpen, header = _a.header, children = _a.children, footer = _a.footer, contentClassName = _a.contentClassName, overlayClassName = _a.overlayClassName;
        return React.createElement(ReactModal, { isOpen: isOpen, shouldCloseOnOverlayClick: false, className: contentClassName, overlayClassName: overlayClassName },
            React.createElement("div", null, header),
            React.createElement("div", null, children),
            React.createElement("div", null, footer));
    };
    return Modal;
}(React.Component));
exports.Modal = Modal;
//# sourceMappingURL=modal.js.map
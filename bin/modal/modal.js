"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactModal = require("react-modal");
var Modal = (function (_super) {
    __extends(Modal, _super);
    function Modal(props) {
        return _super.call(this, props) || this;
    }
    Modal.prototype.render = function () {
        var _a = this.props, isOpen = _a.isOpen, header = _a.header, children = _a.children, footer = _a.footer;
        //className="sb-modal"
        //overlayClassName="sb-modal__overlay"
        return React.createElement(ReactModal, { isOpen: isOpen, shouldCloseOnOverlayClick: false },
            React.createElement("div", { className: 'sb-modal__header' }, header),
            React.createElement("div", { className: 'sb-modal__body' }, children),
            React.createElement("div", { className: 'sb-modal__footer' }, footer));
    };
    return Modal;
}(React.Component));
exports.Modal = Modal;
//# sourceMappingURL=modal.js.map
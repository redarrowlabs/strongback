import * as React from 'react';
import ReactModal from 'react-modal';
export class Modal extends React.Component {
    constructor(props) { super(props); }
    render() {
        const { isOpen, header, children, footer } = this.props;
        //className="sb-modal"
        //overlayClassName="sb-modal__overlay"
        return React.createElement(ReactModal, { isOpen: isOpen, shouldCloseOnOverlayClick: false },
            React.createElement("div", { className: "sb-modal__header" }, header),
            React.createElement("div", { className: "sb-modal__body" }, children),
            React.createElement("div", { className: "sb-modal__footer" }, footer));
    }
}

import * as React from 'react';
import ReactModal from 'react-modal';
export class Modal extends React.Component {
    constructor(props) { super(props); }
    render() {
        const { isOpen } = this.props;
        return React.createElement(ReactModal, { isOpen: isOpen, shouldCloseOnOverlayClick: false },
            React.createElement("div", null, "Hello!"));
    }
}

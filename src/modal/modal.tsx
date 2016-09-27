import * as React from 'react';
import ReactModal from 'react-modal';

export interface IModalProps {
    isOpen: boolean
    header: JSX.Element
    footer: JSX.Element
}

export class Modal extends React.Component<IModalProps, {}>{
    constructor(props: IModalProps) { super(props); }
    render() {
        const {
            isOpen,
            header,
            children,
            footer
        } = this.props;

        //className="sb-modal"
        //overlayClassName="sb-modal__overlay"

        return <ReactModal
            isOpen={isOpen}
            shouldCloseOnOverlayClick={false}>
            <div className="sb-modal__header">{header}</div>
            <div className="sb-modal__body">{children}</div>
            <div className="sb-modal__footer">{footer}</div>
        </ReactModal>
    }
}
import * as React from 'react';
import ReactModal = require('react-modal');

export interface IModalProps {
    isOpen: boolean;
    header: JSX.Element;
    footer: JSX.Element;
}

export class Modal extends React.Component<IModalProps, {}> {
    constructor(props: IModalProps) { super(props); }
    public render() {
        const {
            isOpen,
            header,
            children,
            footer,
        } = this.props;

        //TODO configurable classNames for header, body, footer.

        return <ReactModal
            isOpen={isOpen}
            shouldCloseOnOverlayClick={false}>
            <div>{header}</div>
            <div>{children}</div>
            <div>{footer}</div>
        </ReactModal>;
    }
}

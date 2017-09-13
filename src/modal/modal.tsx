import * as React from 'react';
import ReactModal = require('react-modal');

export interface IModalProps {
    isOpen: boolean;
    header: JSX.Element;
    footer: JSX.Element;
    contentClassName: string;
    overlayClassName: string;
}

export class Modal extends React.Component<IModalProps, {}> {
    constructor(props: IModalProps) { super(props); }
    public render() {
        const {
            isOpen,
            header,
            children,
            footer,
            contentClassName,
            overlayClassName
        } = this.props;

        return <ReactModal
            isOpen={isOpen}
            shouldCloseOnOverlayClick={false}
            className={contentClassName}
            overlayClassName={overlayClassName}>
            <div>{header}</div>
            <div>{children}</div>
            <div>{footer}</div>
        </ReactModal>;
    }
}

import * as React from 'react';
import ReactModal from 'react-modal';
import classNames from 'classnames';
import { Button } from '../button/button';

export interface IModalProps {
    isOpen: boolean
}

export class Modal extends React.Component<IModalProps, {}>{
    constructor(props: IModalProps) { super(props); }
    render() {
        const {
            isOpen
        } = this.props;

        return <ReactModal
            isOpen={isOpen}
            shouldCloseOnOverlayClick={false}>
            <div>Hello!</div>
        </ReactModal>
    }
}
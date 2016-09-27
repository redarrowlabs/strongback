/// <reference types="react" />
import * as React from 'react';
export interface IModalProps {
    isOpen: boolean;
}
export declare class Modal extends React.Component<IModalProps, {}> {
    constructor(props: IModalProps);
    render(): JSX.Element;
}

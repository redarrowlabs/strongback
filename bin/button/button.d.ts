/// <reference types="react" />
import * as React from 'react';
export declare type ButtonVariants = 'primary' | 'default' | 'info' | 'success' | 'warning' | 'danger';
export interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
    loading?: boolean;
    variant?: ButtonVariants;
}
export declare class Button extends React.Component<IButtonProps, {}> {
    constructor(props: IButtonProps);
    render(): JSX.Element;
}

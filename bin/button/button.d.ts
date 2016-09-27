/// <reference types="react" />
import * as React from 'react';
export interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
    loading?: boolean;
}
export declare class Button extends React.Component<IButtonProps, {}> {
    constructor(props: IButtonProps);
    render(): JSX.Element;
}
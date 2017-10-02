/// <reference types="react" />
import * as React from 'react';
export interface ButtonClasses {
    always: string;
    enabled: string;
    disabled: string;
    loading: string;
}
export interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
    loading: boolean;
    classes: ButtonClasses;
}
export declare function Button(props: IButtonProps): JSX.Element;

/// <reference types="react" />
import * as React from 'react';
import { IField, IFieldComponent } from './fields';
export interface SelectStatelessProps extends IFieldComponent<any> {
    label: string;
    options: any[];
    multi?: boolean;
}
export declare function SelectStateless(props: SelectStatelessProps): JSX.Element;
export interface SelectProps extends IField {
    options: any[];
    multi?: boolean;
}
/**
 * Select is used to pick a value from a known set of options.
 */
export declare class Select extends React.Component<SelectProps, {}> {
    constructor(props: SelectProps);
    render(): JSX.Element;
}

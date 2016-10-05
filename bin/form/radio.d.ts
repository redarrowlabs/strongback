/// <reference types="react" />
import * as React from 'react';
import { IField, IFieldComponent } from './fields';
export interface RadioStatelessProps extends IFieldComponent<any> {
    label: string;
    options: any[];
}
export declare function RadioStateless(props: RadioStatelessProps): JSX.Element;
export interface RadioProps extends IField {
    options: any[];
}
/**
 * Radio is used to pick a single from a known set of options.
 */
export declare class Radio extends React.Component<RadioProps, {}> {
    constructor(props: RadioProps);
    render(): JSX.Element;
}

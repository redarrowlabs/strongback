/// <reference types="react" />
import * as React from 'react';
import { IField, IFieldComponent } from './fields';
export interface CheckboxStatelessProps extends IFieldComponent<any> {
    label: string;
    options: any[];
}
export declare function CheckboxStateless(props: CheckboxStatelessProps): JSX.Element;
export interface CheckboxProps extends IField {
    options: any[];
}
/**
 * Checkbox is used to pick multiple values from a known set of options.
 */
export declare class Checkbox extends React.Component<CheckboxProps, {}> {
    constructor(props: CheckboxProps);
    render(): JSX.Element;
}

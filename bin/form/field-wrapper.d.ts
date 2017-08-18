/// <reference types="react" />
import * as React from 'react';
export declare type FieldIndicator = 'optional' | 'required';
export interface FieldWrapperProps {
    fieldProps: {
        label: string;
        meta: {
            touched: boolean;
            error: string;
        };
        /** Text to display when hovering over the label. */
        help?: string;
        indicator?: FieldIndicator;
    };
    mode?: 'no-wrap';
}
/** Wraps a field with a label and error message area. */
export declare class FieldWrapper extends React.Component<FieldWrapperProps, {}> {
    render(): JSX.Element;
}

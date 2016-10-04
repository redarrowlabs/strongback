/// <reference types="react" />
import * as React from 'react';
export interface FieldWrapperProps {
    fieldProps: {
        label: string;
        meta: {
            touched: boolean;
            error: string;
        };
    };
}
/** Wraps a field with a label and error message area. */
export declare class FieldWrapper extends React.Component<FieldWrapperProps, {}> {
    render(): JSX.Element;
}

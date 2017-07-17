/// <reference types="react" />
import * as React from 'react';
export interface IField {
    name: string;
    label: string;
    /** A help tooltip to display. */
    help?: string;
    onBlur?: (e: any) => void;
}
export interface IFieldComponent<T> {
    input: {
        value: T;
        onChange(value: React.SyntheticEvent<any> | T): void;
        onBlur(value: React.SyntheticEvent<any>): void;
        onFocus(value: React.SyntheticEvent<any>): void;
    };
    meta: {
        active: boolean;
        asyncValidating: boolean;
        autofilled: boolean;
        dirty: boolean;
        error: string;
        invalid: boolean;
        pristine: boolean;
        submitting: boolean;
        touched: boolean;
        valid: boolean;
        visited: boolean;
        submitFailed: boolean;
    };
    help?: string;
}

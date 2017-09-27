/// <reference types="react" />
import * as React from 'react';
import { FieldIndicator } from './field-wrapper';
import { TooltipAlignment, TooltipPosition } from '../tooltip';
export interface IField {
    name: string;
    label: string;
    /**Displays Help text*/
    help?: string;
    /**Displays a tooltip text*/
    tooltip?: string;
    tooltipPosition?: TooltipPosition;
    tooltipAlignment?: TooltipAlignment;
    /** Marks this field as optional or required*/
    indicator?: FieldIndicator;
    /** Displays a tooltip*/
    iconContent?: string;
    iconCustomTypeName?: string;
    onBlur?: (e: any) => void;
    prefix?: string;
    suffix?: string;
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
    tooltipProps: {
        tooltip?: string;
        tooltipPosition?: TooltipPosition;
        tooltipAlignment?: TooltipAlignment;
    };
    infoIconProps: {
        iconContent?: string;
        iconCustomTypeName?: string;
    };
    indicator?: FieldIndicator;
    prefix?: string;
    suffix?: string;
}

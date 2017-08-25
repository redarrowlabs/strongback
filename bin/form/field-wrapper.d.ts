/// <reference types="react" />
import * as React from 'react';
import { TooltipAlignment, TooltipPosition } from '../tooltip/tooltip';
export declare type FieldIndicator = 'optional' | 'required';
export interface FieldWrapperProps {
    fieldProps: {
        label: string;
        meta: {
            touched: boolean;
            error: string;
        };
        help?: string;
        indicator?: FieldIndicator;
    };
    tooltipProps: {
        tooltip?: string;
        tooltipPosition?: TooltipPosition;
        tooltipAlignment?: TooltipAlignment;
    };
    infoIconProps?: {
        iconContent?: string;
        iconCustomTypeName?: string;
    };
    mode?: 'no-wrap';
}
/** Wraps a field with a label and help text and error message area. */
export declare class FieldWrapper extends React.Component<FieldWrapperProps, {}> {
    render(): JSX.Element;
}

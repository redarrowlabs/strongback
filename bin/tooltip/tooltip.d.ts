/// <reference types="react" />
import * as React from 'react';
export declare type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
export declare type TooltipAlignment = 'middle' | 'top' | 'bottom' | 'left' | 'right';
export interface TooltipProps {
    tooltip?: string;
    tooltipPosition?: TooltipPosition;
    tooltipAlignment?: TooltipAlignment;
    tooltipCustomTypeName?: string;
}
/** Wraps a field with a label and help text and error message area. */
export declare class Tooltip extends React.Component<TooltipProps, {}> {
    render(): JSX.Element;
}

/// <reference types="react" />
import * as React from 'react';
export interface InfoIconProps {
    iconContent?: string;
    iconCustomTypeName?: string;
    handleClick?(): void;
}
/** Wraps a field with a label and help text and error message area. */
export declare class InfoIcon extends React.Component<InfoIconProps, {}> {
    render(): JSX.Element;
}

/// <reference types="react" />
import * as React from 'react';
export interface RepeatableStatelessProps {
    titleRepeat: string;
    repeatedItems: Array<any>;
    dataKeys: Array<string>;
    handleAdd?: any;
    handleRemove?: any;
}
export declare class RepeatableStateless extends React.Component<RepeatableStatelessProps, {}> {
    render(): JSX.Element;
    getActionElement(handleAdd: any, text: string): JSX.Element | null;
}
export interface AddtiveRepeatableProps {
    newDataKey: () => string;
    maxRepeat?: number;
}
export interface RemovableRepeatableProps {
    minRepeat?: number;
}
export interface RepeatableProps {
    titleRepeat: string;
    dataKeys: Array<string>;
    additive?: AddtiveRepeatableProps;
    removable?: RemovableRepeatableProps;
}
export interface RepeatableState {
    dataKeys: Array<string>;
}
export declare class Repeatable extends React.Component<RepeatableProps, RepeatableState> {
    constructor(props: RepeatableProps);
    onAdd(): void;
    onRemove(): void;
    render(): JSX.Element;
}

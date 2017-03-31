/// <reference types="react" />
import * as React from 'react';
export interface RepeatableStatelessProps {
    titleRepeat: string;
    dataKeys: Array<string>;
    onAdd?: () => void;
    onRemove?: () => void;
}
export declare class RepeatableStateless extends React.Component<RepeatableStatelessProps, {}> {
    render(): JSX.Element;
    getActionElement(handleAdd: (() => void) | undefined, text: string): JSX.Element | null;
}
export interface AddtiveRepeatableProps {
    newDataKey: () => string;
    maxRepeat?: number;
}
export interface RemovableRepeatableProps {
    minRepeat?: number;
}
export declare type Dict = {
    [idx: string]: any;
};
export interface RepeatableProps {
    titleRepeat: string;
    initialData: Dict;
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

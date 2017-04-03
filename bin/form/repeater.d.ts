/// <reference types="react" />
import * as React from 'react';
export declare type CustomHandler = {
    type: 'custom';
    onAdd(): void;
    onRemove(key: string): void;
};
export declare type ManagedHandler = {
    type: 'managed';
    form: string;
    formValues: any;
    dispatch(action: any): void;
};
export declare type ChangeHandler = CustomHandler | ManagedHandler;
export interface RepeaterProps {
    collection: object;
    collectionKey: string;
    handler: ChangeHandler;
}
export declare class Repeater extends React.Component<RepeaterProps, {}> {
    constructor(props: RepeaterProps);
    render(): JSX.Element;
    handleAdd(): void;
    handleRemove(itemKey: string): void;
}

/// <reference types="react" />
import * as React from 'react';
import { IField, IFieldComponent } from './fields';
export interface DateFieldStatelessProps extends IFieldComponent<string> {
    label: string;
}
export declare class DateFieldStateless extends React.Component<DateFieldStatelessProps, {}> {
    constructor(props: DateFieldStatelessProps);
    render(): JSX.Element;
    handleChange(e: any): void;
}
export declare function DateField(props: IField): JSX.Element;

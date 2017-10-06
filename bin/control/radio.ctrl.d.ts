/// <reference types="react" />
import * as React from 'react';
import { IControl, LabelValue, Func, RenderItemParam } from './ctrl';
export interface LabelValue {
    label: string;
    value: string;
}
export interface RenderItemParam {
    index: number;
    item: LabelValue;
}
export declare type Func<T1, T2> = (v: T1) => T2;
export interface RadioControlClasses {
    container: string;
    list: string;
}
export interface RadioControlOptions {
    options: LabelValue[];
    classes: RadioControlClasses;
    renderItem?: Func<RenderItemParam, React.ReactNode>;
}
export declare type RadioControlProps = IControl<string[], RadioControlOptions>;
export declare class RadioControl extends React.Component<RadioControlProps> {
    render(): JSX.Element;
}

/// <reference types="react" />
import * as React from 'react';
import { IControl, LabelValue, Func, RenderItemParam } from './ctrl';
export interface CheckboxControlClasses {
    container: string;
    list: string;
}
export interface CheckboxControlOptions {
    options: LabelValue[];
    classes: CheckboxControlClasses;
    renderItem?: Func<RenderItemParam, React.ReactNode>;
}
export declare type CheckboxControlProps = IControl<string[], CheckboxControlOptions>;
export declare class CheckboxControl extends React.Component<CheckboxControlProps> {
    render(): JSX.Element;
}

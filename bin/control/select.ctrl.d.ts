/// <reference types="react-select" />
/// <reference types="react" />
import * as React from 'react';
import { IControl, LabelValue } from './ctrl';
import * as ReactSelect from 'react-select';
export declare type ReactSelectValue = ReactSelect.Option | ReactSelect.Option[] | null;
export interface SelectControlOptions {
    className: string;
    options: LabelValue[];
    multi: boolean;
}
export declare type SelectControlProps = IControl<string | string[], SelectControlOptions>;
export declare const SelectControl: React.StatelessComponent<SelectControlProps>;

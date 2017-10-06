/// <reference types="react" />
import * as React from 'react';
import { IControl } from './ctrl';
export interface DateControlOptions {
    autoComplete: string;
    className: string;
}
export declare type DateControlProps = IControl<string, DateControlOptions>;
export declare const DateControl: React.StatelessComponent<DateControlProps>;

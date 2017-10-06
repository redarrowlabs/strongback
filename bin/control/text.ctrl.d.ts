/// <reference types="react" />
import * as React from 'react';
import { IControl } from './ctrl';
export interface TextControlOptions {
    multiline: boolean;
    autoComplete: string;
    className: string;
}
export declare type TextControlProps = IControl<string, TextControlOptions>;
export declare const TextControl: React.StatelessComponent<TextControlProps>;

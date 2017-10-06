import * as React from 'react';
import { IControl } from './ctrl';

export interface TextControlOptions {
    multiline: boolean;
    autoComplete: string;
    className: string;
}

export type TextControlProps = IControl<string, TextControlOptions>;

export const TextControl: React.StatelessComponent<TextControlProps> = props => {
    const {
        input: {
            value = '',
            onBlur,
            onChange,
            onFocus,
        },
        options: {
            multiline,
            className,
            autoComplete,
        },
    } = props;

    const control = multiline
        ? <textarea
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            className={className} />
        : <input
            type='text'
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            autoComplete={autoComplete}
            className={className} />;

    return control;
};

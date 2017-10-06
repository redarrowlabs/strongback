import * as React from 'react';
import { IControl } from './ctrl';

export interface DateControlOptions {
    autoComplete: string;
    className: string;
}

export type DateControlProps = IControl<string, DateControlOptions>;

export const DateControl: React.StatelessComponent<DateControlProps> = props => {
    const {
        input: {
            value = '',
            onBlur,
            onChange,
            onFocus,
        },
        options: {
            className,
            autoComplete,
        },
    } = props;

    return <input
        type='date'
        value={value}
        onChange={handleChange(onChange)}
        onBlur={onBlur}
        onFocus={onFocus}
        autoComplete={autoComplete}
        className={className} />;
};

function handleChange(fn: any) {
    return (e: any) => {
        const eventValue = e.target.value;

        let value = '';

        //limit years to 4 digits
        if (eventValue !== '') {
            const arr = eventValue.split('-');
            arr[0] = arr[0].substr(0, 4);
            value = arr.join('-');
        }

        fn(value);
    };
}

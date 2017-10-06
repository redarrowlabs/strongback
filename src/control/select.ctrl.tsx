import * as React from 'react';
import { IControl, LabelValue } from './ctrl';
import * as ReactSelect from 'react-select';

export type ReactSelectValue = ReactSelect.Option
    | ReactSelect.Option[]
    | null;

function isOptArray(option: ReactSelectValue)
    : option is ReactSelect.Option[] {
    return Array.isArray(option);
}

export interface SelectControlOptions {
    className: string;
    options: LabelValue[];
    multi: boolean;
}

export type SelectControlProps = IControl<string | string[], SelectControlOptions>;

export const SelectControl: React.StatelessComponent<SelectControlProps> = props => {
    const {
        input: {
            value = '',
            onBlur,
            onChange,
            onFocus,
        },
        options: {
            options,
            multi,
            className,
        },
    } = props;

    return <ReactSelect
        className={className}
        options={options}
        value={value}
        multi={multi}
        onChange={v => onChange(valueOrDefault(v))}
        onBlur={onBlur}
        onFocus={onFocus}
    />;
};

function valueOrDefault(option: ReactSelect.Option | ReactSelect.Option[] | null) {
    if (!option) { return ''; }

    if (isOptArray(option)) {
        return option.map(x => x.value as string);
    }

    return option.value as string;
}

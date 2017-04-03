import * as React from 'react';
import * as ReactSelect from 'react-select';
import { IField, IFieldComponent } from './fields';
import { Field } from 'redux-form';
import { FieldWrapper } from './field-wrapper';

export interface SelectStatelessProps extends IFieldComponent<any> {
    label: string;
    options: any[];
}

export function SelectStateless(props: SelectStatelessProps) {
    const {
        input: {
            value,
        onChange,
        onBlur,
        onFocus,
        },
        options,
    } = props;

    return <FieldWrapper fieldProps={props}>
        <ReactSelect
            options={options}
            value={value}
            onChange={(v: ReactSelect.Option) => onChange(valueOrDefault(v))}
            onBlur={e => onBlur(e)}
            onFocus={onFocus}
        />
    </FieldWrapper>;
}

function valueOrDefault(option: ReactSelect.Option | null) {
    if (!option) { return ''; }
    return option.value as string;
}

export interface SelectProps extends IField {
    options: any[];
}

/**
 * Select is used to pick a value from a known set of options.
 */
export class Select extends React.Component<SelectProps, {}> {
    constructor(props: SelectProps) {
        super(props);
    }

    render() {
        return <Field
            name={this.props.name}
            component={SelectStateless}
            label={this.props.label}
            options={this.props.options}
            onBlur={this.props.onBlur}
        />;
    }
}

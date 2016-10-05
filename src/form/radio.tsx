import * as React from 'react';
import { SelectList } from 'react-widgets';
import { IField, IFieldComponent } from './fields';
import { Field } from 'redux-form';
import { FieldWrapper } from './field-wrapper';

export interface RadioStatelessProps extends IFieldComponent<any> {
    label: string,
    options: any[],
}

export function RadioStateless(props: RadioStatelessProps) {
    const {
        input: {
            value,
            onChange,
        },
        options,
    } = props;

    return <FieldWrapper fieldProps={props}>
        <SelectList
            data={options}
            value={value}
            onChange={onChange}
            valueField='value'
            textField='label'
            />
    </FieldWrapper>
}

export interface RadioProps extends IField {
    options: any[]
}

/**
 * Radio is used to pick a single from a known set of options.
 */
export class Radio extends React.Component<RadioProps, {}>{
    constructor(props: RadioProps) {
        super(props);
    }

    render() {
        return <Field
            name={this.props.name}
            component={RadioStateless}
            label={this.props.label}
            options={this.props.options}
            />
    }
}
import * as React from 'react';
import { IField, IFieldComponent } from './fields';
import { Field } from 'redux-form';
import { FieldWrapper } from './field-wrapper';

export interface DateFieldStatelessProps extends IFieldComponent<string> {
    label: string;
}

export class DateFieldStateless extends React.Component<DateFieldStatelessProps, {}> {
    constructor(props: DateFieldStatelessProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        const {
            input: {
                value,
                onBlur,
                onFocus,
            },
        } = this.props;

        return <FieldWrapper fieldProps={this.props}>
            <input
                type='date'
                value={value}
                onChange={this.handleChange}
                onBlur={onBlur}
                onFocus={onFocus}
                />
        </FieldWrapper>;

    }

    handleChange(e: any) {
        const eventValue = e.target.value;

        let value = '';

        //limit years to 4 digits
        if (eventValue !== '') {
            const arr = eventValue.split('-');
            arr[0] = arr[0].substr(0, 4);
            value = arr.join('-');
        }

        this.props.input.onChange(value);
    }
}

export function DateField(props: IField) {
    return <Field
        name={props.name}
        component={DateFieldStateless}
        label={props.label}
        />;
}

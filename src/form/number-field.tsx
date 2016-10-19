import * as React from 'react';
import { IField, IFieldComponent } from './fields';
import { Field } from 'redux-form';
import { FieldWrapper } from './field-wrapper';

// TODO Number fields are not supported well in redux-form and may never be
// replace with a good solution like react-widgets number picker
// https://github.com/erikras/redux-form/issues/1236
// https://jquense.github.io/react-widgets/docs/#/numberpicker

export interface NumberFieldProps extends IFieldComponent<string> {
    label: string;
}

export function NumberFieldStateless(props: NumberFieldProps) {
    const {
        input: {
            value,
            onChange,
            onBlur,
            onFocus,
        },
    } = props;

    return <FieldWrapper fieldProps={props}>
        <input
            type='text'
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            />
    </FieldWrapper>;
}

export function NumberField(props: IField) {
    return <Field
        name={props.name}
        component={NumberFieldStateless}
        normalize={normalize}
        label={props.label}
        />;
}

/** 
 * Expression to match numbers as they are typed
 * Allowed: '-', '-1', '-1.', '-1.2'
 */
const typableNumbers = /^[-|\d|\.]\d*\.?\d*$/;
function normalize(value: string, previous: string) {
    if (value === '') {
        return '';
    }

    if (typableNumbers.test(value)) {
        return value;
    }

    return previous;
}

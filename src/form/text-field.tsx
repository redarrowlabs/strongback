import * as React from 'react';
import { IField, IFieldComponent } from './fields';
import { Field } from 'redux-form';
import { FieldWrapper } from './field-wrapper';

export interface TextFieldStatelessProps extends IFieldComponent<string> {
    autoComplete: 'on' | 'off';
    label: string;
    multiline?: boolean;
}

export function TextFieldStateless(props: TextFieldStatelessProps) {
    const {
        input: {
            value,
        onChange,
        onBlur,
        onFocus,
        },
        autoComplete,
        multiline,
    } = props;

    const control = multiline
        ? <textarea
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus} />
        : <input
            type='text'
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            autoComplete={autoComplete} />;

    return <FieldWrapper fieldProps={props}>
        {control}
    </FieldWrapper>;
}

export interface TextFieldProps extends IField {
    autoComplete?: 'on' | 'off';
    multiline?: boolean;
}

export function TextField(props: TextFieldProps) {
    return <Field
        name={props.name}
        component={TextFieldStateless}
        autoComplete={props.autoComplete || 'off'}
        label={props.label}
        onBlur={props.onBlur}
        multiline={props.multiline}
        help={props.help}
    />;
}

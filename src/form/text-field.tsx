import * as React from 'react';
import { IField, IFieldComponent } from './interfaces';
import { Field } from 'redux-form';
import { FieldWrapper } from './field-wrapper';

export interface TextFieldStatelessProps extends IFieldComponent<string> {
    autoComplete: "on" | "off",
    label: string
}

export function TextFieldStateless(props: TextFieldStatelessProps) {
    const {
        input: {
            value,
            onChange,
            onBlur,
            onFocus
        },
        autoComplete
    } = props;

    return <FieldWrapper fieldProps={props}>
        <input
            type="text"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            autoComplete={autoComplete}
            />
    </FieldWrapper>
}

export interface TextFieldProps extends IField {
    autoComplete?: "on" | "off"
}

export function TextField(props: TextFieldProps) {
    return <Field
        name={props.name}
        component={TextFieldStateless}
        autoComplete={props.autoComplete || "off"}
        label={props.label}
        />
}
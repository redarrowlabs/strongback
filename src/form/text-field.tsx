import * as React from 'react';
import { IField, IFieldComponent } from './fields';
import { Field } from 'redux-form';
import { FieldWrapper } from './field-wrapper';

export interface TextFieldStatelessProps extends IFieldComponent<string> {
    autoComplete: 'on' | 'off';
    label: string;
    multiline?: boolean;
    suffix?: string;
    prefix?: string;
}

export function TextFieldStateless(props: TextFieldStatelessProps) {
    const {
        input: {
            value,
            onChange,
            onBlur,
            onFocus,
            
        },
        suffix,
        prefix,
        autoComplete,
        multiline,
        meta: {
            invalid
        },
    } = props;


    let invalidClassName = '';
    if (invalid) {
        invalidClassName = 'error'
    }

    let suf:React.ReactNode = null;
    if (suffix != null) {
        suf = <span className="suffix">{suffix}</span>
    }

    let pre:React.ReactNode = null;
    if (prefix != null) {
        pre = <span className="prefix">{prefix}</span>
    }

    const control = multiline
        ? <textarea
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            className={invalidClassName}/>
        : <input
            type='text'
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            autoComplete={autoComplete} 
            className={invalidClassName}/>

    return <FieldWrapper fieldProps={props}>
        {pre}{control}{suf}
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
        indicator={props.indicator}
        suffix={props.suffix}
        prefix={props.prefix}
    />;
}

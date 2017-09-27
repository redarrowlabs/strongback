import * as React from 'react';
import { IField, IFieldComponent } from './fields';
import { Field } from 'redux-form';
import { FieldWrapper } from './field-wrapper';
import * as classNames from 'classnames';

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
        tooltipProps,
        infoIconProps,
        suffix,
        prefix,
        autoComplete,
        multiline,
        meta: {
            invalid
        },
    } = props;


    let inputClass = classNames({
        'error': invalid
    });

    let suffixEl = suffix
        ? <span className="suffix">{suffix}</span>
        : null;

    let prefixEl = prefix
        ? <span className="prefix">{prefix}</span>
        : null;

    const control = multiline
        ? <textarea
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            className={inputClass} />
        : <input
            type='text'
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            autoComplete={autoComplete}
            className={inputClass} />

    return <FieldWrapper fieldProps={props} tooltipProps={tooltipProps} infoIconProps={infoIconProps}>
        {prefixEl}{control}{suffixEl}
    </FieldWrapper>;
}

export interface TextFieldProps extends IField {
    autoComplete?: 'on' | 'off';
    multiline?: boolean;
    suffix?: string;
    prefix?: string;

}



export function TextField(props: TextFieldProps) {
    const tooltipProps = props.tooltip
    ? {
        tooltip: props.tooltip, 
        tooltipPosition:props.tooltipPosition, 
        tooltipAlignment:props.tooltipAlignment
    }
    :null;

    const infoIconProps = props.iconContent
    ? {
        iconContent:props.iconContent, 
        iconCustomTypeName:props.iconCustomTypeName
    }
    :null;

    return <Field
        name={props.name}
        component={TextFieldStateless}
        autoComplete={props.autoComplete || 'off'}
        label={props.label}
        onBlur={props.onBlur}
        multiline={props.multiline}
        indicator={props.indicator}
        help={props.help}
        suffix={props.suffix}
        prefix={props.prefix}
        tooltipProps={tooltipProps}
        infoIconProps={infoIconProps}
    />;
}

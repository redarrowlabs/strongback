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
    suffix?: string;
    prefix?: string;
}

export function NumberFieldStateless(props: NumberFieldProps) {
    const {
        input: {
            value,
            onChange,
            onBlur,
            onFocus,
        },
        meta: {
            invalid
        },
        tooltipProps,
        infoIconProps,
        suffix,
        prefix,
    } = props;

    let invalidClassName = '';
    if (invalid) {
        invalidClassName = 'error'
    }

    let suffixEl = suffix
        ? <span className="suffix">{suffix}</span>
        : null;

    let prefixEl = prefix
        ? <span className="prefix">{prefix}</span>
        : null;

    return <FieldWrapper fieldProps={props} tooltipProps={tooltipProps} infoIconProps={infoIconProps}>
        {prefixEl}
        <input
            type='text'
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            className={invalidClassName}
        />
        {suffixEl}
    </FieldWrapper>;
}

export function NumberField(props: IField) {
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
        component={NumberFieldStateless}
        normalize={normalize}
        label={props.label}
        onBlur={props.onBlur}
        help={props.help}
        indicator={props.indicator}
        suffix={props.suffix}
        prefix={props.prefix}
        tooltipProps={tooltipProps}
        infoIconProps={infoIconProps}
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

import * as React from 'react';
import { Tooltip,TooltipAlignment,TooltipPosition,TooltipProps } from '../tooltip/tooltip';
import * as classNames from 'classnames';

export type FieldIndicator = 'optional' | 'required';

export interface FieldWrapperProps {
    fieldProps: {
        label: string;
        meta: {
            touched: boolean;
            error: string;
        },
        help?: string;
        indicator?: FieldIndicator;
    };
    tooltipProps: {
        tooltip? : string;
        tooltipPosition?: TooltipPosition;
        tooltipAlignment?: TooltipAlignment;
    };
    
    mode?: 'no-wrap';
}
/** Wraps a field with a label and help text and error message area. */
export class FieldWrapper extends React.Component<FieldWrapperProps, {}> {
    render() {
        const {
            fieldProps: {
                meta: { touched, error },
                help,
                label,
                indicator,
                
            },
            tooltipProps,
            children,
            mode,
        } = this.props;

        const labelClass = classNames({
            'error': touched && (error !== '')
        });

        let helpEl:React.ReactNode = null;
        if (help != null) {
            helpEl = <div className='c-form-field--help-text'>{help}</div>
        }
        //For multiple inputs in children
        if (mode === 'no-wrap') {
            return <div className='c-form-field'>
                <label className={labelClass}>
    
                    <FieldLabel
                        label={label}
                        indicator={indicator}
                        tooltipProps={tooltipProps}
                    />
                         
                </label>
                {children}
                {helpEl}
                <FieldError error={error} touched={touched} />
            </div>;
        }

        return <div className='c-form-field'>
            <label className={labelClass}>
                <FieldLabel
                    label={label}
                    indicator={indicator}
                    tooltipProps={tooltipProps} />
                {children}
            </label>
            {helpEl}
            <FieldError error={error} touched={touched} />
        </div>;
    }
}

interface FieldLabelProps {
    label: string;
    indicator: FieldIndicator | undefined;
    tooltipProps: TooltipProps | undefined;
}

/** The label of the field, including indicators. */
function FieldLabel(props: FieldLabelProps) {
    const { 
        label, 
        indicator,
        tooltipProps
     } = props;

    let indicatorEl: React.ReactNode = null;
    if (indicator === 'optional') {
        indicatorEl = <span className='indicator'>(optional)</span>
    }

    if (indicator === 'required') {
        indicatorEl = <span className='indicator'>*</span>
    }

    const indicatorClass = classNames({
        'optional': props.indicator === 'optional',
        'required': props.indicator === 'required'
    });

    let tooltipEl: React.ReactNode = null;
    if (tooltipProps != null) {
        tooltipEl = <Tooltip tooltip={tooltipProps.tooltip} tooltipAlignment={tooltipProps.tooltipAlignment} tooltipPosition={tooltipProps.tooltipPosition} />
    }

    return <div className={indicatorClass}>
        {label} {indicatorEl} {tooltipEl}
    </div>;
}

interface FieldErrorProps {
    touched: boolean;
    error: string;
}

/** The error message section of a field. */
function FieldError(props: FieldErrorProps) {
    const { touched, error } = props;
    if (touched && error) {
        return <div className='c-form-field--error-message'>{error}</div>;
    }

    return null;
}
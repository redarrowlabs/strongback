import * as React from 'react';
import * as classNames from 'classnames';

export type FieldIndicator = 'optional' | 'required';

export interface FieldWrapperProps {
    fieldProps: {
        label: string;
        meta: {
            touched: boolean;
            error: string;
        },
        /** Text to display when hovering over the label. */
        help?: string;
        indicator?: FieldIndicator;
    };
    mode?: 'no-wrap';

}

/** Wraps a field with a label and error message area. */
export class FieldWrapper extends React.Component<FieldWrapperProps, {}> {
    render() {
        const {
            fieldProps: {
                meta: { touched, error },
                help,
                label,
                indicator
            },
            children,
            mode,
        } = this.props;

        const labelClass = classNames({
            'error': touched && (error !== '')
        });

        //For multiple inputs in children
        if (mode === 'no-wrap') {
            return <div>
                <label className={labelClass}>
                    <FieldLabel
                        label={label}
                        indicator={indicator} />
                </label>
                {children}
                <HelpArea text={help} />
                <FieldError error={error} touched={touched} />
            </div>;
        }

        return <div>
            <label className={labelClass}>
                <FieldLabel
                    label={label}
                    indicator={indicator} />
                {children}
            </label>
            <HelpArea text={help} />
            <FieldError error={error} touched={touched} />
        </div>;
    }
}

interface FieldLabelProps {
    label: string;
    indicator: FieldIndicator | undefined;
}

/** The label of the field, including indicators. */
function FieldLabel(props: FieldLabelProps) {
    const { label, indicator } = props;


    let indicatorEl: React.ReactNode = null;
    if (indicator === 'optional') {
        indicatorEl = <span>(optional)</span>
    }

    if (indicator === 'required') {
        indicatorEl = <span>*</span>
    }

    const indicatorClass = classNames({
        'optional': props.indicator === 'optional',
        'required': props.indicator === 'required'
    });

    return <div className={indicatorClass}>
        {label} {indicatorEl}
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
        return <div className='error-message'>{error}</div>;
    }

    return null;
}

interface HelpAreaProps {
    text: string | undefined;
}

/** An element that shows some helper text or an info tip. */
function HelpArea(props: HelpAreaProps) {
    const { text } = props;

    var helpTextLength = (text || '').length;

    if (helpTextLength > 50) {
        return <div>
            <span className='help-icon'></span>
            <div className='helper-text'>{text}</div>
        </div>
    }

    return <div className='helper-text'>{text}</div>
}

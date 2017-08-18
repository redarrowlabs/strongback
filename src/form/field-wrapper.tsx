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

        const indicatorClass = getClasses(this.props);

        let errorEl:React.ReactNode = null;
        let labelClass = '';
        if (touched && error) {
            errorEl = <div className='error-message'>{error}</div>;
            labelClass = 'error'
        }

        let indicatorEl:React.ReactNode = null;
        if (indicator === 'optional') {
            indicatorEl = <span>(optional)</span>
        }

        if (indicator === 'required') {
            indicatorEl = <span>*</span>
        }

        let helpEl:React.ReactNode = null;

        var helpTextLength = (help || '').length;
        if (helpTextLength > 50) {
            helpEl = <div><span className='help-icon'></span><div className='helper-text'>{help}</div></div>
        }

        else {
            helpEl = <div className='helper-text'>{help}</div>
        }
        

        //For multiple inputs in children
        if (mode === 'no-wrap') {
            return <div>
                <label className={labelClass}>
                    <div className={indicatorClass}>{label} {indicatorEl}</div>
                </label>
                {children}
                {helpEl}
                {errorEl}
                
            </div>;
        }

        return <div>
            <label className={labelClass}>
                <div className={indicatorClass}>{label} {indicatorEl}</div>
                {children}
                
            </label>
            {helpEl}
            {errorEl}
        </div>;
    }
}

function getClasses(props: FieldWrapperProps) {
    return classNames({
        'optional': props.fieldProps.indicator === 'optional',
        'required': props.fieldProps.indicator === 'required'
    });
}

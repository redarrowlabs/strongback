import * as React from 'react';

export interface FieldWrapperProps {
    fieldProps: {
        label: string;
        meta: {
            touched: boolean;
            error: string;
        },
        /** Text to display when hovering over the label. */
        help?: string;
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
            },
            children,
            mode,
        } = this.props;

        const err = touched && error;

        //For multiple inputs in children
        if (mode === 'no-wrap') {
            return <div>
                <label title={help}>
                    <div>{label}</div>
                </label>
                {children}
                <div>{err}</div>
            </div>;
        }

        return <div>
            <label title={help}>
                <div>{label}</div>
                {children}
            </label>
            <div>{err}</div>
        </div>;
    }
}

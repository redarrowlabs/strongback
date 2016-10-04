import * as React from 'react';

export interface FieldWrapperProps {
    fieldProps: {
        label: string;
        meta: {
            touched: boolean,
            error: string
        }
    }
}

/** Wraps a field with a label and error message area. */
export class FieldWrapper extends React.Component<FieldWrapperProps, {}>{
    render() {
        const {
            fieldProps: {
                meta: {touched, error},
                label,
            },
            children
        } = this.props;

        const err = touched && error;

        return <div>
            <label>
                <div>{label}</div>
                {children}
            </label>
            <div>{err}</div>
        </div>
    }
}
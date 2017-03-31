/// <reference types="react" />
import * as React from 'react';
export interface IReduxForm {
    handleSubmit: any;
    pristine: boolean;
    submitting: boolean;
    valid: boolean;
    enableReinitialize: boolean;
    submitFailed: boolean;
    initialValues: any;
    reset(): void;
}
export interface IStrongbackForm extends IReduxForm {
    /**
     * Called with the values of the form. This
     * is where you can do snyc or async validation.
     * Return void to indicate a successful submit,
     * or throw redux-forms SubmissionError to invalidate.
     */
    onSubmit(values: any): void;
}
/**
 * A simple form wrapper, which tracks async status and validation.
 * Expected use case is a simple, one page, no-nonsense form. If
 * your form is more complicated than that, implement it yourself!
 */
export declare class Form extends React.Component<IStrongbackForm, {}> {
    render(): JSX.Element;
}

import * as React from 'react';
import { Button } from '../button/button';

export interface IReduxForm {
    handleSubmit: any;
    pristine: boolean;
    submitting: boolean;
    valid: boolean;
    enableReinitialize: boolean;
    submitFailed: boolean;
    initialValues: any;
    form: string;
    dispatch(action: any): void;
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
export class Form extends React.Component<IStrongbackForm, {}> {
    render() {
        const { handleSubmit, submitting, pristine, submitFailed, reset } = this.props;
        const { onSubmit } = this.props;

        const err = submitFailed
            ? <div>The form could not be completed</div>
            : null;

        return <div>
            {err}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    {this.props.children}
                </div>
                <div>
                    <Button type='submit' loading={submitting}>
                        Submit
                </Button>
                    <Button type='button' variant='default' disabled={pristine || submitting} onClick={reset}>
                        Reset
                </Button>
                </div>
            </form>
        </div>;
    }
}

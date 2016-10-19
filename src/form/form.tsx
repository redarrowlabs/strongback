import * as React from 'react';
import { Button } from '../button/button';

export interface IForm {
    handleSubmit: any;
    pristine: boolean;
    submitting: boolean;
    submitValidation: any;
    valid: boolean;
    enableReinitialize: boolean;
    reset(): void;
}

export class Form extends React.Component<IForm, {}> {
    render() {
        const {handleSubmit, submitting, pristine, reset, valid} = this.props;
        const {submitValidation} = this.props;
        const showError = !pristine && !valid;

        let err = showError
            ? <div>The form could not be completed</div>
            : null;

        return <div>
            {err}
            <form onSubmit={handleSubmit(submitValidation)}>
                <div>
                    {this.props.children}
                </div>
                <div>
                    <Button type='submit' loading={submitting}>
                        Submit
                </Button>
                    <Button type='button' variant='secondary' disabled={pristine || submitting} onClick={reset}>
                        Reset
                </Button>
                </div>
            </form>
        </div>;
    }
}

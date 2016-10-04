import * as React from 'react';
import { IForm } from './interfaces';
import { Button } from '../button/button';

export default class Form extends React.Component<IForm, {}> {
    render() {
        const {handleSubmit, submitting, pristine, reset, valid} = this.props;
        const {submitValidation} = this.props;
        const showError = !pristine && !valid

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
                    <Button type="submit" loading={submitting}>
                        Submit
                </Button>
                    <Button type="button" disabled={pristine || submitting} onClick={reset}>
                        Reset
                </Button>
                </div>
            </form>
        </div>
    }
}
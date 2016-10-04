import * as React from 'react';
import { reduxForm } from 'redux-form';
import { IForm } from './interfaces';
import { Button } from '../button/button';

export default class Form extends React.Component<IForm, {}> {
    render() {
        const {handleSubmit, submitting, pristine, reset, valid} = this.props;
        const {submitValidation} = this.props;
        const err = !pristine && !valid && <div>The form could not be completed</div>

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
                        Clear Values
                </Button>
                </div>
            </form>
        </div>
    }
}

export function makeForm(options: any, component: any) {
    return reduxForm(options as any)(component);
}
import * as React from 'react';
import { storiesOf, action, module } from '@kadira/storybook';
import { combineReducers, createStore } from 'redux';
import { reducer as formReducer, SubmissionError } from 'redux-form';
import { Provider } from 'react-redux'
import Form, { makeForm } from './form'
import TextField from './text-field'
import NumberField from './number-field'

const AppStore = makeStore();

storiesOf('Form', module)
    .add('Widgets', () => {
        return <Provider store={AppStore}>
            <SampleForm onSubmit={action('submit')} />
        </Provider>
    })

class SampleFormStateless extends React.Component<any, {}>{
    render() {
        return <Form {...this.props} submitValidation={validate}>
            <TextField name="text" label="Text" />
            <NumberField name="number" label="Number" />
        </Form>
    }
}

const SampleForm = makeForm({
    form: 'strongback-example'
}, SampleFormStateless);

function makeStore() {
    const reducers = {
        form: formReducer
    }

    const win = (window as any);
    const devtools = win.devToolsExtension
        && win.devToolsExtension();

    const reducer = combineReducers(reducers);
    return createStore(reducer, devtools);
}

async function validate(values: any) {
    await delay(3500);
    
    let errors: any = {};
    if (values.text && values.text === values.text.toLocaleUpperCase()) {
        errors['text'] = "No yelling"
    }

    if (values.number && isNaN(parseFloat(values.number))) {
        errors['number'] = "Not a number"
    }

    if (!isEmpty(errors)) {
        throw new SubmissionError(errors)
    }
}

/** Promise that resolves after a set amount of time */
function delay(ms: number) { return new Promise<{}>(res => setTimeout(res, ms)); }

/** True if an object as no keys.  */
function isEmpty(obj: Object) { return Object.keys(obj).length === 0; }
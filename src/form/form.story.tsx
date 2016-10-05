import * as React from 'react';
import { storiesOf, action, module } from '@kadira/storybook';
import { combineReducers, createStore } from 'redux';
import { reducer as formReducer, SubmissionError, reduxForm } from 'redux-form';
import { Provider, connect } from 'react-redux'

import { Button } from '../button/button';

import { Form } from './form'
import { TextField } from './text-field'
import { NumberField } from './number-field'

storiesOf('Form', module)
    .add('Widgets', () => {
        return <Provider store={AppStore}>
            <div>
                <SampleForm
                    onValidSubmit={action('submit')}
                    onInvalidSubmit={action('invalid')} />
                <Button type="button" onClick={loadData}>Load Record</Button>
            </div>
        </Provider>
    })

class SampleFormStateless extends React.Component<any, {}>{
    constructor(props: any) {
        super(props);
        this.validate = this.validate.bind(this);
    }

    render() {
        return <Form {...this.props} submitValidation={this.validate}>
            <TextField name="text" label="Text" />
            <NumberField name="number" label="Number" />
        </Form>
    }

    async validate(values: any) {
        //Simulate talking to a server
        await delay(3500);

        //Parse server errors or perform local validation.
        let errors: any = {};
        if (values.text && values.text === values.text.toLocaleUpperCase()) {
            errors['text'] = "No yelling"
        }

        if (values.number && isNaN(parseFloat(values.number))) {
            errors['number'] = "Not a number"
        }

        if (!isEmpty(errors)) {
            this.props.onInvalidSubmit(values, errors)
            throw new SubmissionError(errors)
        }

        this.props.onValidSubmit(values);
    }
}

const initialData = {
    text: '',
    number: ''
}

const AppStore = makeStore();

const stateToProps = (state: any) => ({
    initialValues: state.data
})

//TODO this is mighty complicated, with no typing...
//Connect the stateless form to the Store and redux-forms internals.
const SampleForm = connect(
    stateToProps
)(reduxForm({
    form: 'strongback-example',
    enableReinitialize: true
})(SampleFormStateless)) as React.ComponentClass<any>;


/**
 * Combine reducers from redux form and an app specific one.
 * Attach dev tools to store instance.
 */
function makeStore() {
    const reducers = {
        data: dataReducer,
        form: formReducer
    }

    const win = (window as any);
    const devtools = win.devToolsExtension
        && win.devToolsExtension();

    const reducer = combineReducers(reducers);
    return createStore(reducer, devtools);
}

const LOAD_DATA_SUCCESS = 'redarrowlabs/LOAD_DATA_SUCCESS';

function dataReducer(state = initialData, action: any) {
    switch (action.type) {
        case LOAD_DATA_SUCCESS:
            return {
                text: action.data.text,
                number: action.data.number
            }
    }

    return state;
}

/** Simulate get response from server */
async function loadData() {
    await delay(500)

    AppStore.dispatch({
        type: LOAD_DATA_SUCCESS,
        data: { text: 'World', number: '321' }
    });
}

/** True if an object as no keys.  */
function isEmpty(obj: Object) { return Object.keys(obj).length === 0; }

/** Promise that resolves after a set amount of time */
function delay(ms: number) { return new Promise<{}>(res => setTimeout(res, ms)); }
import * as React from 'react';
import { storiesOf, action, module } from '@kadira/storybook';
import { combineReducers, createStore } from 'redux';
import {
    reducer as formReducer,
    SubmissionError,
    reduxForm,
    getFormValues,
} from 'redux-form';
import { Provider, connect } from 'react-redux';

import {
    Button,
    Form,
    IStrongbackForm,
    TextField,
    NumberField
} from '../index';

import { Repeater } from './repeater';

storiesOf('Form', module)
    .add('Repeatable Widgets', () => {
        return <Provider store={AppStore}>
            <div>
                <RepeatableForm
                    onValidSubmit={action('submit')}
                    onInvalidSubmit={action('invalid')} />
                <Button type='button' onClick={loadRepeatableData}>Load Record</Button>
            </div>
        </Provider>;
    });

type Dict<T> = { [idx: string]: T };

interface SampleFormProps extends IStrongbackForm {
    onValidSubmit(values: SampleFormValues): void;
    onInvalidSubmit(values: SampleFormValues, errors: Object): void;
    formValues?: Dict<any>;
}

interface SampleFormValues {
    topText: string;
    datas: Dict<any>;
}

class RepeatableFormStateless extends React.Component<SampleFormProps, {}> {
    constructor(props: any) {
        super(props);
        this.myValidation = this.myValidation.bind(this);
        this.searchRemote = this.searchRemote.bind(this);
    }

    render() {
        const repeaterItemsEntry = (this.props.formValues && this.props.formValues['datas']) || {};

        return <Form {...this.props} onSubmit={this.myValidation}>
            <TextField
                name={`topText`}
                label='TopLevelText' />
            <Repeater
                collection={repeaterItemsEntry}
                collectionKey='datas'
                handler={{
                    type: 'managed',
                    form: this.props.form,
                    formValues: this.props.formValues,
                    dispatch: this.props.dispatch
                }}>
                {/* onBlur? See the comments in repeater.tsx */}
                <TextField
                    onBlur={(e: any) => e.preventDefault()}
                    name={`text`}
                    label='Text' />
                <NumberField
                    onBlur={(e: any) => e.preventDefault()}
                    name={`number`}
                    label='Number' />
            </Repeater>
        </Form>;
    }

    async myValidation(values: SampleFormValues) {
        //Simulate talking to a server
        await delay(randomBetween(200, 2000));

        //Parse server errors or perform local validation.
        let errors: any = {};

        if (values.topText
            && values.topText === values.topText.toLocaleUpperCase()) {
            errors.topText = 'No yelling';
        }

        const repeatTextValues = dictToArray(values.datas)
            .filter(x => !!x.value.text)
            .filter(x => x.value.text === x.value.text.toLocaleUpperCase())

        for (let section of repeatTextValues) {
            if (!errors.datas) { errors.datas = {} }
            errors.datas[section.key] = { text: 'No yelling' };
        }

        // The onValidSubmit and onInvalidSubmit props
        // are arbitrary and not a required part of the API -
        // you could just as easily pass through the submit step
        // without any validation.
        if (!isEmpty(errors)) {
            this.props.onInvalidSubmit(values, errors);
            throw new SubmissionError(errors);
        }

        this.props.onValidSubmit(values);
    }

    async searchRemote(search: string) {
        //Simulate searching...
        await delay(randomBetween(200, 2000));

        const filter = (x: { label: string, value: string }) =>
            x.label.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1;

        return [
            { label: 'Red', value: 'red' },
            { label: 'Green', value: 'green' },
            { label: 'Blue', value: 'blue' },
        ].filter(filter);
    }
}

function dictToArray<T>(o: Dict<T>) {
    return Object.keys(o).map(x => ({ key: x, value: o[x] }));
}

const initialRepeatableData = {
    topText: 'abc',
    datas: {
        data1: {
            text: 'a',
            number: '1',
        },
        data2: {
            text: 'b',
            number: '2',
        }
    }
};

const AppStore = makeStore();

const stateToRepeatableProps = (state: any) => ({
    initialValues: state.repeatable,
    formValues: getFormValues('strongback-repeatable-example')(state),
});

const RepeatableForm = connect(
    stateToRepeatableProps
)(reduxForm({
    form: 'strongback-repeatable-example',
    enableReinitialize: true
})(RepeatableFormStateless)) as React.ComponentClass<any>;

/**
 * Combine reducers from redux form and an app specific one.
 * Attach dev tools to store instance.
 */
function makeStore() {
    const reducers = {
        repeatable: repeatableDataReducer,
        form: formReducer,
    };

    const win = (window as any);
    const devtools = win.devToolsExtension
        && win.devToolsExtension();

    const reducer = combineReducers(reducers);
    return createStore(reducer, devtools);
}

interface LOAD_REPEATABLE_DATA_SUCCESS {
    type: 'redarrowlabs/LOAD_REPEATABLE_DATA_SUCCESS';
    payload: any;
}

interface DELETE_KEY {
    type: 'redarrowlabs/DELETE_KEY'
    payload: {
        form: string;
        name: string;
    }
}

type Action = LOAD_REPEATABLE_DATA_SUCCESS | DELETE_KEY;

function repeatableDataReducer(state = initialRepeatableData, action: Action) {
    switch (action.type) {
        case 'redarrowlabs/LOAD_REPEATABLE_DATA_SUCCESS':
            return action.payload;
        default:
            return state;
    }
}

/** Simulate get response from server */
async function loadRepeatableData() {
    await delay(randomBetween(200, 2000));

    AppStore.dispatch({
        type: 'redarrowlabs/LOAD_REPEATABLE_DATA_SUCCESS',
        payload: {
            topText: 'Hello',
            datas: { dataNew: { text: 'World', number: '321', select: 'one' } }
        }
    });
}

/** True if an object as no keys.  */
function isEmpty(obj: Object) { return Object.keys(obj).length === 0; }

/** Promise that resolves after a set amount of time */
function delay(ms: number) { return new Promise<{}>(res => setTimeout(res, ms)); }

/** Random int between min and max */
function randomBetween(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

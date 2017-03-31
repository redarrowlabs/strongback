import * as React from 'react';
import { storiesOf, action, module } from '@kadira/storybook';
import { combineReducers, createStore } from 'redux';
import { reducer as formReducer, SubmissionError, reduxForm } from 'redux-form';
import { Provider, connect } from 'react-redux';

import {
    Button,
    Form,
    IStrongbackForm,
    TextField,
    NumberField,
    SearchNSelect,
    Select,
    Radio,
    Checkbox,
    DateField,
    Repeatable,
} from '../index';

storiesOf('Form', module)
    .add('Widgets', () => {
        return <Provider store={AppStore}>
            <div>
                <SampleForm
                    onValidSubmit={action('submit')}
                    onInvalidSubmit={action('invalid')} />
                <Button type='button' onClick={loadData}>Load Record</Button>
            </div>
        </Provider>;
    })
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

interface SampleFormProps extends IStrongbackForm {
    onValidSubmit(values: SampleFormValues): void;
    onInvalidSubmit(values: SampleFormValues, errors: Object): void;
}

interface SampleFormValues {
    text: string;
    number: string;
}

class SampleFormStateless extends React.Component<SampleFormProps, {}> {
    constructor(props: any) {
        super(props);
        this.myValidation = this.myValidation.bind(this);
        this.searchRemote = this.searchRemote.bind(this);
    }

    render() {
        return <Form {...this.props} onSubmit={this.myValidation}>
            <TextField
                name='text'
                label='Text' />
            <NumberField
                name='number'
                label='Number' />
            <Select
                name='select'
                label='Select'
                options={[
                    { label: 'One', value: 'one' },
                    { label: 'Two', value: 'two' },
                ]} />
            <SearchNSelect
                name='search'
                label={`Search n' Select`}
                onSearch={this.searchRemote} />
            <Radio
                name='radio'
                label='Radio'
                options={[
                    { label: 'Hamburger', value: 'burg' },
                    { label: 'Brat', value: 'brat' },
                    { label: 'Veggie Patty', value: 'patty' },
                ]} />
            <Checkbox
                name='checkbox'
                label='Checkbox'
                options={[
                    { label: 'Cheese', value: 'cheese' },
                    { label: 'Onion', value: 'onion' },
                    { label: 'Tomato', value: 'tomato' },
                ]} />
            <DateField name='date' label='Date' />
        </Form>;
    }

    async myValidation(values: SampleFormValues) {
        //Simulate talking to a server
        await delay(randomBetween(200, 2000));

        //Parse server errors or perform local validation.
        let errors: any = {};
        if (values.text && values.text === values.text.toLocaleUpperCase()) {
            errors.text = 'No yelling';
        }

        if (values.number && isNaN(parseFloat(values.number))) {
            errors.number = 'Not a number';
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

class RepeatableFormStateless extends React.Component<SampleFormProps, {}> {
    constructor(props: any) {
        super(props);
        this.myValidation = this.myValidation.bind(this);
        this.searchRemote = this.searchRemote.bind(this);
    }

    render() {
        const dataKeys = new Array();
        for (const property in this.props.initialValues) {
            dataKeys.push(property);
        }

        const additive = {
                    newDataKey: this.generateNewDataKey.bind(this),
                    maxRepeat: 5};
        const removable = {
            minRepeat: 1};

        return <Form {...this.props} onSubmit={this.myValidation}>
            <Repeatable
                titleRepeat='Repeatable Field'
                dataKeys={dataKeys}
                additive={additive}
                removable={removable}>
            <TextField
                key={`text`}
                name={`text`}
                label='Text' />
            <NumberField
                key={`number`}
                name={`number`}
                label='Number' />
            <Select
                key={`select`}
                name={`select`}
                label='Select'
                options={[
                    { label: 'One', value: 'one' },
                    { label: 'Two', value: 'two' },
                ]} />
            <SearchNSelect
                key={`search`}
                name={`search`}
                label={`Search n' Select`}
                onSearch={this.searchRemote} />
            <Radio
                key={`radio`}
                name={`radio`}
                label='Radio'
                options={[
                    { label: 'Hamburger', value: 'burg' },
                    { label: 'Brat', value: 'brat' },
                    { label: 'Veggie Patty', value: 'patty' },
                ]} />
            <Checkbox
                key={`checkbox`}
                name={`checkbox`}
                label='Checkbox'
                options={[
                    { label: 'Cheese', value: 'cheese' },
                    { label: 'Onion', value: 'onion' },
                    { label: 'Tomato', value: 'tomato' },
                ]} />
            <DateField
                key={`date`}
                name={`date`}
                label='Date' />
            </Repeatable>
        </Form>;
    }

    generateNewDataKey() {
        let d = new Date().getTime();
            const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
        return uuid;
    }

    async myValidation(values: SampleFormValues) {
        //Simulate talking to a server
        await delay(randomBetween(200, 2000));

        //Parse server errors or perform local validation.
        let errors: any = {};
        if (values.text && values.text === values.text.toLocaleUpperCase()) {
            errors.text = 'No yelling';
        }

        if (values.number && isNaN(parseFloat(values.number))) {
            errors.number = 'Not a number';
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

const initialData = {
    text: '',
    number: '',
    select: '',
    search: '',
    radio: '',
    checkbox: [],
};

const initialRepeatableData = {
    data1: {
        id: '1',
        text: 'a',
        number: '',
        select: '',
        search: '',
        radio: '',
        checkbox: [],
    },
    data2: {
        id: '2',
        text: 'b',
        number: '',
        select: '',
        search: '',
        radio: '',
        checkbox: [],
    }
};

const AppStore = makeStore();

const stateToProps = (state: any) => ({
    initialValues: state.data,
});
const stateToRepeatableProps = (state: any) => ({
    initialValues: state.repeatable,
});

//TODO this is mighty complicated, with no typing...
//Connect the stateless form to the Store and redux-forms internals.
const SampleForm = connect(
    stateToProps
)(reduxForm({
    form: 'strongback-example',
    enableReinitialize: true
})(SampleFormStateless)) as React.ComponentClass<any>;

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
        data: dataReducer,
        repeatable: repeatableDataReducer,
        form: formReducer,
    };

    const win = (window as any);
    const devtools = win.devToolsExtension
        && win.devToolsExtension();

    const reducer = combineReducers(reducers);
    return createStore(reducer, devtools);
}

const LOAD_DATA_SUCCESS = 'redarrowlabs/LOAD_DATA_SUCCESS';
const LOAD_REPEATABLE_DATA_SUCCESS = 'redarrowlabs/LOAD_REPEATABLE_DATA_SUCCESS';

function dataReducer(state = initialData, action: any) {
    switch (action.type) {
        case LOAD_DATA_SUCCESS:
            return {
                text: action.data.text,
                number: action.data.number,
                select: action.data.select,
            };
        default:
            return state;
    }
}
function repeatableDataReducer(state = initialRepeatableData, action: any) {
    switch (action.type) {
        case LOAD_REPEATABLE_DATA_SUCCESS:
            return action.data;
        default:
            return state;
    }
}

/** Simulate get response from server */
async function loadData() {
    await delay(randomBetween(200, 2000));

    AppStore.dispatch({
        type: LOAD_DATA_SUCCESS,
        data: { text: 'World', number: '321', select: 'one' },
    });
}
async function loadRepeatableData() {
    await delay(randomBetween(200, 2000));

    AppStore.dispatch({
        type: LOAD_REPEATABLE_DATA_SUCCESS,
        data: {data1:{ text: 'World', number: '321', select: 'one' }},
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

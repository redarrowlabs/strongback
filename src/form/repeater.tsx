import * as React from 'react';
import { } from './fields';
import { FormSection, change } from 'redux-form';
import { } from './field-wrapper';
import { Button } from '../button/button';

/*
TODO: there's a weird issue where redux-forms
really doesn't like having empty stuff in
values that weren't part of the initialValues.
For example:

{ 
    initial: {
        datas: {
            key1: { x: 'abc' }
        }
    },
    values: {
        datas: {
            key1: { x: 'xyz' },
            newKey: { x: 'def' }
        }
    }
 }

When [BLUR] or [CHANGE] action happens, new state ends up as...

{ 
    initial: {
        datas: {
            key1: { x: 'abc' }
        }
    },
    values: {
        datas: {
            key1: { x: 'xyz' }
        }
    }
 }

In practice, this makes it look like sections
will mysteriously disappear when tabbing off of
them or deleting the values

There probably isn't a nice way to handle this in strongback,
but client code can preventDefault on the onblur events
for their fields, and we can put a value that won't be
empty on the values object (which is not a great thing to do):

Some related issues and source: 
https://github.com/erikras/redux-form/issues/2508
https://github.com/erikras/redux-form/issues/879
https://github.com/erikras/redux-form/blob/v6.6.1/src/reducer.js#L158
*/

export type CustomHandler = {
    type: 'custom'
    onAdd(): void;
    onRemove(key: string): void;
}

export type ManagedHandler = {
    type: 'managed'
    form: string;
    formValues: any;
    dispatch(action: any): void;
}

export type ChangeHandler = CustomHandler | ManagedHandler

export interface RepeaterProps {
    collectionKey: string;
    itemKeys: string[];
    handler: ChangeHandler;
}

export class Repeater extends React.Component<RepeaterProps, {}>{
    constructor(props: RepeaterProps) {
        super(props);

        this.handleRemove = this.handleRemove.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }
    render() {
        const { collectionKey } = this.props;

        const sections = this.props.itemKeys.map(itemKey =>
            <RepeaterSection
                key={`${collectionKey}.${itemKey}`}
                itemKey={itemKey}
                collectionKey={collectionKey}
                onRemove={this.handleRemove}>
                {this.props.children}
            </RepeaterSection>);

        return <div>
            <div>{sections}</div>
            <div><Button onClick={this.handleAdd}>Add</Button></div>
        </div>;
    }

    handleAdd() {
        const { handler, collectionKey } = this.props;

        if (handler.type === 'custom') {
            handler.onAdd();
        } else {
            const { dispatch, form } = handler;

            //Sets a new blank object with a random key.
            //all the registering of fields is handled
            //by the redux-form library reducer.

            dispatch(change(
                form,
                `${collectionKey}.${generateNewDataKey()}`,
                { __REPEATER_NO_DELETE: 'x' }
            ));
        }
    }

    handleRemove(itemKey: string) {
        const { handler, collectionKey } = this.props;

        if (handler.type === 'custom') {
            handler.onRemove(itemKey);
        } else {
            const { dispatch, formValues, form } = handler;

            //We need to dispatch a change to the whole collection here,
            //since redux-forms does not interpret a change action
            //with null or undefined as a intent to delete that key.

            const newDatas = JSON.parse(JSON.stringify(formValues[collectionKey]));
            delete newDatas[itemKey];

            dispatch(change(
                form,
                `${collectionKey}`,
                newDatas));
        }
    }
}

interface RepeaterSectionProps {
    itemKey: string;
    collectionKey: string;
    onRemove(itemKey: string): void;
}
class RepeaterSection extends React.Component<RepeaterSectionProps, {}>{
    render() {
        const { itemKey, collectionKey, onRemove } = this.props;

        return <fieldset>
            <FormSection
                name={`${collectionKey}.${itemKey}`}>
                {this.props.children}
                <div>
                    <Button
                        variant='danger'
                        onClick={() => onRemove(itemKey)}>
                        Remove
                    </Button>
                </div>
            </FormSection>
        </fieldset>;
    }
}

function generateNewDataKey() {
    let d = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}
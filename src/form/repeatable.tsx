import * as React from 'react';

export interface RepeatableStatelessProps {
    titleRepeat: string;
    dataKeys: Array<string>;    // bound data property names
    onAdd?: () => void;
    onRemove?: () => void;
}

export class RepeatableStateless extends React.Component<RepeatableStatelessProps, {}> {

    render() {
        const dataKeys = this.props.dataKeys;
        const titleRepeat = this.props.titleRepeat;

        //TODO: don't like this cast
        const children = this.props.children as React.ReactElement<any>[];

        //For each of the collection items, show all of the controls provided as children.
        const userControls = dataKeys.map(dataKey => <DataItemGroup
            key={dataKey}
            dataKey={dataKey}
            titleRepeat={titleRepeat}
            items={children} />);

        const addElement = this.getActionElement(
            this.props.onAdd, 'Add');
        const removeElement = this.getActionElement(
            this.props.onRemove, 'Remove');

        // This is brittle in handling children with nested elements
        return <div>
            {userControls}
            {addElement}
            {removeElement}
        </div>;
    }

    getActionElement(handleAdd: (() => void) | undefined, text: string) {
        return handleAdd
            ? (<a onClick={handleAdd}>{text}</a>)
            : null;
    }
}

interface DataItemGroupProps {
    dataKey: string;
    items: React.ReactElement<any>[];
    titleRepeat: string;
}

function DataItemGroup(props: DataItemGroupProps) {
    const { dataKey, titleRepeat, items } = props;
    const fieldsWithKeys = items.map(x => provideKey(dataKey, x));

    return <fieldset key={`${dataKey}-fieldset`}>
        <legend>{titleRepeat}</legend>
        {fieldsWithKeys}
    </fieldset>;
}

/**
 * Namespaces the element under a certain data key, by cloning it and applying a new name / key.
 * @param dataKey 
 * @param item 
 */
function provideKey(dataKey: string, item: React.ReactElement<any>) {
    var name = item.props.name;
    var properties = {
        name: `${dataKey}.${name}`,
        key: `${dataKey}.${name}`
    };
    return React.cloneElement(item, properties);
}

export interface AddtiveRepeatableProps {
    newDataKey: () => string;
    maxRepeat?: number;
}

export interface RemovableRepeatableProps {
    minRepeat?: number;
}

export type Dict = { [idx: string]: any }

export interface RepeatableProps {
    titleRepeat: string;
    initialData: Dict;
    additive?: AddtiveRepeatableProps;
    removable?: RemovableRepeatableProps;
}

export interface RepeatableState {
    dataKeys: Array<string>;
}

//TODO: functional set state
export class Repeatable extends React.Component<RepeatableProps, RepeatableState> {
    constructor(props: RepeatableProps) {
        super(props);

        this.onAdd = this.onAdd.bind(this);
        this.onRemove = this.onRemove.bind(this);

        const keys = Object.keys(this.props.initialData);

        this.state = {
            dataKeys: keys
        };
    }

    onAdd() {
        if (!this.props.additive) {
            return;
        }

        const allowInfinite = !this.props.additive.maxRepeat;
        const maxRepeat = this.props.additive.maxRepeat || 0;

        const dataKeys = this.state.dataKeys;
        const canAdd = allowInfinite || (dataKeys.length < maxRepeat);

        if (allowInfinite || canAdd) {
            dataKeys.push(this.props.additive.newDataKey());
        }

        this.setState({
            dataKeys: dataKeys
        });
    }

    onRemove() {
        if (!this.props.removable) { return; }

        const allowInfinite = !this.props.removable.minRepeat;
        const minRepeat = this.props.removable.minRepeat || 0;

        const dataKeys = this.state.dataKeys;
        const hasKeys = dataKeys.length > 0;
        const hasEnough = dataKeys.length > minRepeat;
        const canRemove = hasKeys && (allowInfinite || hasEnough);

        if (canRemove) {
            dataKeys.splice(-1, 1);
        }

        this.setState({
            dataKeys: dataKeys
        });
    }

    render() {
        const handleAdd = this.props.additive && this.onAdd;
        const handleRemove = this.props.removable && this.onRemove;

        return <RepeatableStateless
            titleRepeat={this.props.titleRepeat}
            dataKeys={this.state.dataKeys}
            onAdd={handleAdd}
            onRemove={handleRemove}>
            {this.props.children}
        </RepeatableStateless>
    }
}

import * as React from 'react';

export interface RepeatableStatelessProps {
    titleRepeat: string;
    repeatedItems: Array<any>;  // child form elements
    dataKeys: Array<string>;    // bound data property names
    handleAdd?: any;
    handleRemove?: any;
}

export class RepeatableStateless extends React.Component<RepeatableStatelessProps, {}> {

    render() {
        const dataKeys = this.props.dataKeys;
        const titleRepeat = this.props.titleRepeat;
        const repeatedItems = this.props.repeatedItems;

        const addElement = this.getActionElement(this.props.handleAdd, 'Add');
        const removeElement = this.getActionElement(this.props.handleRemove, 'Remove');

        // This is brittle in handling children with nested elements
        return (
            <div>
                {dataKeys.map(dataKey => makeDataItemGroups(dataKey, titleRepeat, repeatedItems))}
                {/* User controls */}
                {addElement}
                {removeElement}
            </div>
        );
    }

    getActionElement(handleAdd: any, text: string) {
        return handleAdd
            ? (<a onClick={handleAdd}>{text}</a>)
            : null;
    }
}

function makeDataItemGroups(dataKey: string, titleRepeat: string, repeatedItems: Array<any>) {
    return repeatedItems.map((itemGroup: any) => makeDataItemGroup(dataKey, titleRepeat, itemGroup));
}

function makeDataItemGroup(dataKey: string, titleRepeat: string, itemGroup: any) {
    return (
        <fieldset key={`${dataKey}-fieldset`}>
            <legend>{titleRepeat}</legend>

            {itemGroup.map((item: any) => makeDataItem(dataKey, item))}
        </fieldset>
    );
}

function makeDataItem(dataKey: string, item: any) {
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

export interface RepeatableProps {
    titleRepeat: string;
    dataKeys: Array<string>;    // bound data property names
    additive?: AddtiveRepeatableProps;
    removable?: RemovableRepeatableProps;
}

export interface RepeatableState {
    dataKeys: Array<string>;    // bound data property names
}

export class Repeatable extends React.Component<RepeatableProps, RepeatableState> {
    constructor(props: RepeatableProps) {
        super(props);

        this.onAdd = this.onAdd.bind(this);
        this.onRemove = this.onRemove.bind(this);

        this.state = {
            dataKeys: this.props.dataKeys
        };
    }

    onAdd() {
        if (!this.props.additive) {
            return;
        }

        const allowInfinite = !(this.props.additive && this.props.additive.maxRepeat);
        const maxRepeat = (this.props.additive && this.props.additive.maxRepeat) || 0;

        const dataKeys = this.state.dataKeys;
        if (allowInfinite ||  dataKeys.length < maxRepeat) {
            dataKeys.push(this.props.additive.newDataKey());
        }


        this.setState({
            dataKeys: dataKeys
        });
    }

    onRemove() {
        const allowInfinite = !(this.props.removable && this.props.removable.minRepeat);
        const minRepeat = (this.props.removable && this.props.removable.minRepeat) || 0;

        const dataKeys = this.state.dataKeys;
        if (dataKeys.length > 0 && (allowInfinite || dataKeys.length > minRepeat)) {
            dataKeys.splice(-1, 1);
        }

        this.setState({
            dataKeys: dataKeys
        });
    }

    render() {
        const repeatedItems = [new Array().concat(this.props.children)];

        const handleAdd = this.props.additive
            ? this.onAdd
            : null;
        const handleRemove = this.props.removable
            ? this.onRemove
            : null;

        return <RepeatableStateless
            titleRepeat={this.props.titleRepeat}
            repeatedItems={repeatedItems}
            dataKeys={this.state.dataKeys}
            handleAdd={handleAdd}
            handleRemove={handleRemove}
        />;
    }
}

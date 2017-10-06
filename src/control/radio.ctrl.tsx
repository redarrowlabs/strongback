import * as React from 'react';
import { IControl, LabelValue, Func, RenderItemParam } from './ctrl';
import { SelectList } from 'react-widgets';

export interface LabelValue {
    label: string;
    value: string;
}

export interface RenderItemParam {
    index: number;
    item: LabelValue;
}

export type Func<T1, T2> = (v: T1) => T2;

export interface RadioControlClasses {
    container: string;
    list: string;
}

export interface RadioControlOptions {
    options: LabelValue[];
    classes: RadioControlClasses;
    renderItem?: Func<RenderItemParam, React.ReactNode>;
}

const AnySelectList = SelectList as any;

export type RadioControlProps = IControl<string[], RadioControlOptions>;

export class RadioControl extends React.Component<RadioControlProps> {
    render() {
        const {
            input: {
                value = [],
                onChange,
            },
            options: {
                classes,
                options,
                renderItem,
            },
        } = this.props;

        const renderFn = renderItem ? renderItem : (x: RenderItemParam) => <span>{x.item.label}</span>;

        return <AnySelectList
            className={classes.container}
            data={options}
            value={value}
            onChange={(v: LabelValue[]) => onChange(v.map((x: LabelValue) => x.value))}
            multiple={false}
            valueField='value'
            textField='label'
            itemComponent={renderFn}
            listProps={{ className: classes.list }}
        />;
    }
}

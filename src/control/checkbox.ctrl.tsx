import * as React from 'react';
import { IControl, LabelValue, Func, RenderItemParam } from './ctrl';
import { SelectList } from 'react-widgets';

export interface CheckboxControlClasses {
    container: string;
    list: string;
}

export interface CheckboxControlOptions {
    options: LabelValue[];
    classes: CheckboxControlClasses;
    renderItem?: Func<RenderItemParam, React.ReactNode>;
}

const AnySelectList = SelectList as any;

export type CheckboxControlProps = IControl<string[], CheckboxControlOptions>;

export class CheckboxControl extends React.Component<CheckboxControlProps> {
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
            multiple={true}
            valueField='value'
            textField='label'
            itemComponent={renderFn}
            listProps={{ className: classes.list }}
        />;
    }
}

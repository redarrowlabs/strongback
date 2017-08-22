import * as React from 'react';
import { SelectList } from 'react-widgets';
import { IField, IFieldComponent } from './fields';
import { Field } from 'redux-form';
import { FieldWrapper } from './field-wrapper';

export interface CheckboxStatelessProps extends IFieldComponent<any> {
    label: string;
    options: any[];
}

export function CheckboxStateless(props: CheckboxStatelessProps) {
    const {
        input: {
            value,
        onChange,
        },
        options,
        tooltipProps,
    } = props;

    return <FieldWrapper fieldProps={props} mode='no-wrap' tooltipProps={tooltipProps}>
        <SelectList
            data={options}
            value={value}
            onChange={onChange}
            multiple={true}
            valueField='value'
            textField='label'
        />
    </FieldWrapper>;
}

export interface CheckboxProps extends IField {
    options: any[];
}

/**
 * Checkbox is used to pick multiple values from a known set of options.
 */
export class Checkbox extends React.Component<CheckboxProps, {}> {
    constructor(props: CheckboxProps) {
        super(props);
    }

    render() {
        const tooltipProps = this.props.tooltip
        ? {
            tooltip: this.props.tooltip, 
            tooltipPosition: this.props.tooltipPosition, 
            tooltipAlignment: this.props.tooltipAlignment
        }
        :null;
        
        return <Field
            name={this.props.name}
            component={CheckboxStateless}
            label={this.props.label}
            options={this.props.options}
            help={this.props.help}
            indicator={this.props.indicator}
            tooltipProps={tooltipProps}
        />;
    }
}

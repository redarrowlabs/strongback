import * as React from 'react';
import { SelectList } from 'react-widgets';
import { IField, IFieldComponent } from './fields';
import { Field } from 'redux-form';
import { FieldWrapper } from './field-wrapper';

export interface RadioStatelessProps extends IFieldComponent<any> {
    label: string;
    options: any[];
}

export function RadioStateless(props: RadioStatelessProps) {
    const {
        input: {
            value,
            onChange,
        },
        options,
        tooltipProps,
        infoIconProps,
    } = props;

    return <FieldWrapper fieldProps={props} mode='no-wrap' tooltipProps={tooltipProps} infoIconProps={infoIconProps}>
        <SelectList
            data={options}
            value={value}
            onChange={onChange}
            valueField='value'
            textField='label'
            />
    </FieldWrapper>;
}

export interface RadioProps extends IField {
    options: any[];
}

/**
 * Radio is used to pick a single from a known set of options.
 */
export class Radio extends React.Component<RadioProps, {}> {
    constructor(props: RadioProps) {
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

        const infoIconProps = this.props.iconContent
        ? {
            iconContent: this.props.iconContent, 
            iconCustomTypeName: this.props.iconCustomTypeName
        }
        :null;
        return <Field
            name={this.props.name}
            component={RadioStateless}
            label={this.props.label}
            options={this.props.options}
            help={this.props.help}
            indicator={this.props.indicator}
            tooltipProps={tooltipProps}
            infoIconProps={infoIconProps}
            />;
    }
}

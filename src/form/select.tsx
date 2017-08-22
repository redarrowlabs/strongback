import * as React from 'react';
import * as ReactSelect from 'react-select';
import { IField, IFieldComponent } from './fields';
import { Field } from 'redux-form';
import { FieldWrapper } from './field-wrapper';
import { isOptArray } from './react-select-util';

export interface SelectStatelessProps extends IFieldComponent<any> {
    label: string;
    options: any[];
    multi?: boolean;
}

export function SelectStateless(props: SelectStatelessProps) {
    const {
        input: {
            value,
        onChange,
        onBlur,
        onFocus,
        },
        tooltipProps,
        options,
        multi,
    } = props;

    return <FieldWrapper fieldProps={props} tooltipProps={tooltipProps}>
        <ReactSelect
            options={options}
            value={value}
            multi={multi}
            onChange={v => onChange(valueOrDefault(v))}
            onBlur={e => onBlur(e)}
            onFocus={onFocus}
        />
    </FieldWrapper>;
}

function valueOrDefault(option: ReactSelect.Option | ReactSelect.Option[] | null) {
    if (!option) { return ''; }

    if (isOptArray(option)) {
        return option.map(x => x.value);
    }

    return option.value as string;
}

export interface SelectProps extends IField {
    options: any[];
    multi?: boolean;
}

/**
 * Select is used to pick a value from a known set of options.
 */
export class Select extends React.Component<SelectProps, {}> {
    constructor(props: SelectProps) {
        super(props);
    }

    render() {
        const tooltipProps = this.props.tooltip
        ? {
            tooltip: this.props.tooltip, 
            tooltipPosition:this.props.tooltipPosition, 
            tooltipAlignment:this.props.tooltipAlignment
        }
        :null;
        return <Field
            name={this.props.name}
            component={SelectStateless}
            label={this.props.label}
            options={this.props.options}
            multi={this.props.multi}
            onBlur={this.props.onBlur}
            help={this.props.help}
            indicator={this.props.indicator}
            tooltip={this.props.tooltip}
            tooltipProps={tooltipProps}
        />;
    }
}

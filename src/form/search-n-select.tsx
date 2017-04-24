import * as React from 'react';
import * as ReactSelect from 'react-select';
import { Field } from 'redux-form';
import { debounce } from 'lodash';
import { FieldWrapper } from './field-wrapper';
import { IField, IFieldComponent } from './fields';
import { isOptArray, ReactSelectValue } from './react-select-util';

export interface SearchNSelectStatelessProps extends IFieldComponent<any> {
    label: string;
    options: any[];
    isLoading: boolean;
    onSearch(search: string): void;
    multi?: boolean;
}

export function SearchNSelectStateless(props: SearchNSelectStatelessProps) {
    const {
        input: {
            value,
        onChange,
        onBlur,
        onFocus,
        },
        options,
        onSearch,
        isLoading,
        multi
    } = props;

    return <FieldWrapper fieldProps={props}>
        <ReactSelect
            options={options}
            value={value}
            multi={multi}
            onChange={onChangeUnique(onChange)}
            onBlur={e => onBlur(e)}
            onFocus={onFocus}
            onInputChange={onSearch}
            filterOptions={identity}
            isLoading={isLoading}
        />
    </FieldWrapper>;
}

function onChangeUnique(onChange: (value: any) => void) {
    return (x: ReactSelectValue) => {
        if (isOptArray(x)) {
            //References from different search results can
            //cause duplicates, so filter them out after
            //converting to value types
            const uniq = unique(x.map(o => JSON.stringify(o)));
            const asObjects = uniq.map(x => JSON.parse(x));
            onChange(asObjects);
            return;
        }

        onChange(x);
    }
}

function unique<T>(arr: T[]) {
    return Array.from(new Set(arr));
}

export interface SearchNSelectProps extends IField {
    onSearch(search: string): Promise<any>;
    multi?: boolean;
}

export interface SearchNSelectState {
    options: any[];
    isLoading: boolean;
}

const initialState: SearchNSelectState = {
    options: [],
    isLoading: false,
};

/**
 * Search-n-select is used to pick a value from a remote service.
 */
export class SearchNSelect extends React.Component<SearchNSelectProps, SearchNSelectState> {
    constructor(props: SearchNSelectProps) {
        super(props);
        this.state = initialState;
        this.handleSearch = this.handleSearch.bind(this);
        this.debouncedSearch = debounce(this.handleSearch, 200);
    }

    render() {
        return <Field
            name={this.props.name}
            multi={this.props.multi}
            component={SearchNSelectStateless}
            label={this.props.label}
            onSearch={this.debouncedSearch}
            options={this.state.options}
            isLoading={this.state.isLoading}
            onBlur={this.props.onBlur}
        />;
    }

    async debouncedSearch(_: string) { /* will bind */ }
    async handleSearch(search: string) {
        console.log(search);

        this.setState({
            isLoading: true,
        } as any, async () => {
            const results = await this.props.onSearch(search);

            this.setState({
                options: results,
                isLoading: false,
            });
        });

    }
}

function identity<T>(o: T) {
    return o;
}

import * as React from 'react';
import * as ReactSelect from 'react-select';
import { IField, IFieldComponent } from './fields';
import { Field } from 'redux-form';
import { FieldWrapper } from './field-wrapper';
import { debounce } from 'lodash';

export interface SearchNSelectStatelessProps extends IFieldComponent<any> {
    label: string,
    options: any[],
    onSearch(search: string): void,
    isLoading: boolean
}

export function SearchNSelectStateless(props: SearchNSelectStatelessProps) {
    const {
        input: {
            value,
            onChange,
            onBlur,
            onFocus
        },
        options,
        onSearch,
        isLoading
    } = props;

    return <FieldWrapper fieldProps={props}>
        <ReactSelect
            options={options}
            value={value}
            onChange={onChange}
            onBlur={() => onBlur(value)}
            onFocus={onFocus}
            onInputChange={onSearch}
            filterOptions={identity}
            isLoading={isLoading}
            />
    </FieldWrapper>
}

export interface SearchNSelectProps extends IField {
    onSearch(search: string): Promise<any>
}

export interface SearchNSelectState {
    options: any[]
    isLoading: boolean
}

const initialState: SearchNSelectState = {
    options: [],
    isLoading: false
}

/**
 * Search-n-select is used to pick a value from a remote service.
 */
export class SearchNSelect extends React.Component<SearchNSelectProps, SearchNSelectState>{
    constructor(props: SearchNSelectProps) {
        super(props);
        this.state = initialState
        this.handleSearch = this.handleSearch.bind(this);
        this.debouncedSearch = debounce(this.handleSearch, 200);
    }

    render() {
        return <Field
            name={this.props.name}
            component={SearchNSelectStateless}
            label={this.props.label}
            onSearch={this.debouncedSearch}
            options={this.state.options}
            isLoading={this.state.isLoading}
            />
    }

    async debouncedSearch(_: string) { }
    async handleSearch(search: string) {
        console.log(search);

        this.setState({
            isLoading: true
        } as any, async () => {
            const results = await this.props.onSearch(search);

            this.setState({
                options: results,
                isLoading: false
            })
        });


    }
}

function identity<T>(o: T) {
    return o;
}
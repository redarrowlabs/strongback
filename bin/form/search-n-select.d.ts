/// <reference types="react" />
import * as React from 'react';
import { IField, IFieldComponent } from './fields';
export interface SearchNSelectStatelessProps extends IFieldComponent<any> {
    label: string;
    options: any[];
    isLoading: boolean;
    multi?: boolean;
    onSearch(search: string): void;
}
export declare function SearchNSelectStateless(props: SearchNSelectStatelessProps): JSX.Element;
export interface SearchNSelectProps extends IField {
    multi?: boolean;
    onSearch(search: string): Promise<any>;
}
export interface SearchNSelectState {
    options: any[];
    isLoading: boolean;
}
/**
 * Search-n-select is used to pick a value from a remote service.
 */
export declare class SearchNSelect extends React.Component<SearchNSelectProps, SearchNSelectState> {
    constructor(props: SearchNSelectProps);
    render(): JSX.Element;
    debouncedSearch(_: string): Promise<void>;
    handleSearch(search: string): Promise<void>;
}

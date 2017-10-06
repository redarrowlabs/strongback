/// <reference types="react" />
export interface IControl<TValue, TControlOptions> {
    input: {
        value: TValue;
        onChange(value: React.SyntheticEvent<any> | TValue): void;
        onBlur(value: React.SyntheticEvent<any>): void;
        onFocus(value: React.SyntheticEvent<any>): void;
    };
    options: TControlOptions;
}
export interface LabelValue {
    label: string;
    value: string;
}
export interface RenderItemParam {
    index: number;
    item: LabelValue;
}
export declare type Func<T1, T2> = (v: T1) => T2;

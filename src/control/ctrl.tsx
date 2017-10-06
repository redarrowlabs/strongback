export interface IControl<TValue, TControlOptions> {
    input: {
        value: TValue;
        onChange(value: React.SyntheticEvent<any> | TValue): void;
        onBlur(value: React.SyntheticEvent<any>): void;
        onFocus(value: React.SyntheticEvent<any>): void;
    };
    // meta: {
    //     active: boolean;
    //     asyncValidating: boolean;
    //     autofilled: boolean;
    //     dirty: boolean;
    //     error: string;
    //     invalid: boolean;
    //     pristine: boolean;
    //     submitting: boolean;
    //     touched: boolean;
    //     valid: boolean;
    //     visited: boolean;
    //     submitFailed: boolean;
    // };
    options: TControlOptions;
    // help?: string;
    // tooltipProps: {
    //     tooltip?: string;
    //     tooltipPosition?: TooltipPosition;
    //     tooltipAlignment?: TooltipAlignment;
    // };
    // infoIconProps: {
    //     iconContent?: string;
    //     iconCustomTypeName?: string;
    // };
    // indicator?: FieldIndicator;
    // prefix?: string;
    // suffix?: string;
}

export interface LabelValue {
    label: string;
    value: string;
}

export interface RenderItemParam {
    index: number;
    item: LabelValue;
}

export type Func<T1, T2> = (v: T1) => T2;

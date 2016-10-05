/// <reference types="react" />
import * as React from 'react';
export interface IForm {
    handleSubmit: any;
    pristine: boolean;
    submitting: boolean;
    reset(): void;
    submitValidation: any;
    valid: boolean;
    enableReinitialize: boolean;
}
export declare class Form extends React.Component<IForm, {}> {
    render(): JSX.Element;
}

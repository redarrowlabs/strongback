/// <reference types="react" />
import * as React from 'react';
export interface IForm {
    handleSubmit: any;
    pristine: boolean;
    submitting: boolean;
    submitValidation: any;
    valid: boolean;
    enableReinitialize: boolean;
    reset(): void;
}
export declare class Form extends React.Component<IForm, {}> {
    render(): JSX.Element;
}

/// <reference types="react" />
import { IField, IFieldComponent } from './fields';
export interface TextFieldStatelessProps extends IFieldComponent<string> {
    autoComplete: 'on' | 'off';
    label: string;
}
export declare function TextFieldStateless(props: TextFieldStatelessProps): JSX.Element;
export interface TextFieldProps extends IField {
    autoComplete?: 'on' | 'off';
}
export declare function TextField(props: TextFieldProps): JSX.Element;

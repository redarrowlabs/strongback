/// <reference types="react" />
import { IField, IFieldComponent } from './interfaces';
export interface TextFieldStatelessProps extends IFieldComponent<string> {
    autoComplete: "on" | "off";
    label: string;
}
export declare function TextFieldStateless(props: TextFieldStatelessProps): JSX.Element;
export interface TextFieldProps extends IField {
    autoComplete?: "on" | "off";
}
export default function TextField(props: TextFieldProps): JSX.Element;

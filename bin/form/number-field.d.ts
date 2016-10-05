/// <reference types="react" />
import { IField, IFieldComponent } from './fields';
export interface NumberFieldProps extends IFieldComponent<string> {
    label: string;
}
export declare function NumberFieldStateless(props: NumberFieldProps): JSX.Element;
export declare function NumberField(props: IField): JSX.Element;

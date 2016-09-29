/// <reference types="react" />
export interface IClipboardProps {
    text: string;
    onCopy(): void;
}
export declare function Clipboard(props: IClipboardProps): JSX.Element;

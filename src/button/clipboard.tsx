import * as ReactClipboard from 'react-clip/dist/react-clipboard';
import * as React from 'react';

//Something about the typings are off.
const AnyClipboard = ReactClipboard as any;

export interface IClipboardProps {
    text: string;
    onCopy(): void;
}

export function Clipboard(props: IClipboardProps) {
    return <AnyClipboard
        data-clipboard-text={props.text}
        onSuccess={props.onCopy}>Copy</AnyClipboard>;
}

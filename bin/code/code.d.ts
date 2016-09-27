/// <reference types="react" />
import * as React from 'react';
export interface ICodeProps {
    language?: 'javascript' | 'cs';
}
export declare class Code extends React.Component<ICodeProps, {}> {
    constructor(props: ICodeProps);
    render(): JSX.Element;
    handleCopy(): void;
}

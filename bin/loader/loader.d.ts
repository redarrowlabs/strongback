/// <reference types="react" />
import * as React from 'react';
export declare function setLoader<T extends React.ComponentClass<{}>>(component: T): void;
export declare class Loader extends React.Component<any, {}> {
    render(): JSX.Element;
}

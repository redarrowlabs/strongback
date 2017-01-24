import * as React from 'react';
import { Loader as DefaultLoader } from './default-loader';
let Implementation: React.ComponentClass<{}> = DefaultLoader;

export function setLoader<T extends React.ComponentClass<{}>>(component: T) {
    Implementation = component;
}

export class Loader extends React.Component<any, {}> {
    render() {
        return <Implementation {...this.props} />;
    }
}
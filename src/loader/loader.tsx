import * as React from 'react';

class DefaultLoader extends React.Component<{}, {}>{
    render(): JSX.Element { 
        throw new Error(`
        No loader implementation has been specified. To fix this:
        A) call useDefaultImplementations
        or
        B) call setLoader to specify a loader component.
        `) 
    }
};

let Implementation: React.ComponentClass<{}> = DefaultLoader;

export function setLoader<T extends React.ComponentClass<{}>>(component: T) {
    Implementation = component;
}

export class Loader extends React.Component<any, {}>{
    render() {
        return <Implementation {...this.props} />
    }
}
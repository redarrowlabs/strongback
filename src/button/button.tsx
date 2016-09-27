import * as React from 'react';
import { PulseLoader } from 'halogen';
import classNames from 'classnames';

export interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
    loading?: boolean
}

//TODO provide customization options
const loaderColor = '#000000';
const loaderSize = '0.75em';
const inactiveClass = defaultClasses(false);
const loadingClass = defaultClasses(false);
const activeClass = defaultClasses(true);

function defaultClasses(active: boolean): string {
    return classNames({
        'f6 bw0 link dim br2 ph3 pv2 mb2 dib white': true,
        'bg-purple pointer': active,
        'bg-mid-gray ': !active
    })
}

export class Button extends React.Component<IButtonProps, {}>{
    constructor(props: IButtonProps) { super(props); }
    render() {
        const {
            children,
            loading = false
        } = this.props;
        const rest = restOp(this.props);

        const buttonClass = getClasses(this.props);
        const disabled = loading || rest.disabled;
        const loader = loading
            ? <PulseLoader
                size={loaderSize}
                color={loaderColor} />
            : null

        return <button
            className={buttonClass}
            {...rest}
            disabled={disabled}>
            {loader}
            {children}
        </button>
    }
}

function getClasses(props: IButtonProps) {
    if (props.loading) { return loadingClass }
    if (props.disabled) { return inactiveClass }
    return activeClass
}

function restOp(props: IButtonProps): React.HTMLProps<HTMLButtonElement> {
    //TODO Implement rest operator when it lands in typescript
    //https://github.com/Microsoft/TypeScript/issues/10727
    //https://github.com/Microsoft/TypeScript/pull/11150

    const p = Object.assign({}, props);
    delete p.loading;
    return p;
}
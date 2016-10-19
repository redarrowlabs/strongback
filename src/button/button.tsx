import * as React from 'react';
import { Loader } from '../loader/loader';
import * as classNames from 'classnames';

export interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
    loading?: boolean;
    variant?: 'primary' | 'secondary';
}

export class Button extends React.Component<IButtonProps, {}> {
    constructor(props: IButtonProps) { super(props); }
    render() {
        const {
            children,
            loading = false,
        } = this.props;
        const rest = restOp(this.props);

        const buttonClass = getClasses(this.props);
        const disabled = loading || rest.disabled;
        const loader = loading
            ? <Loader
                size={loaderSize}
                color={loaderColor} />
            : null;

        return <button
            className={buttonClass}
            {...rest}
            disabled={disabled}>
            {loader}
            {children}
        </button>;
    }
}

function getClasses(props: IButtonProps) {
    if (props.variant === 'secondary') {
        if (props.loading) { return secondLoadingClass; }
        if (props.disabled) { return secondInactiveClass; }
        return secondActiveClass;
    }

    if (props.loading) { return loadingClass; }
    if (props.disabled) { return inactiveClass; }
    return activeClass;
}

//TODO provide customization options
const loaderColor = '#ffffff';
const loaderSize = '0.75em';
const inactiveClass = defaultPrimaryClasses(false);
const loadingClass = defaultPrimaryClasses(false);
const activeClass = defaultPrimaryClasses(true);
const secondInactiveClass = defaultSecondaryClasses(false);
const secondLoadingClass = defaultSecondaryClasses(false);
const secondActiveClass = defaultSecondaryClasses(true);

function defaultPrimaryClasses(active: boolean): string {
    return classNames({
        'o-button o-button--primary': true,
        'o-button--active': active,
        'o-button--disabled ': !active,
    });
}

function defaultSecondaryClasses(active: boolean): string {
    return classNames({
        'o-button o-button--secondary': true,
        'o-button--active': active,
        'o-button--disabled ': !active,
    });
}

function restOp(props: IButtonProps): React.HTMLProps<HTMLButtonElement> {
    //TODO Implement rest operator when it lands in typescript
    //https://github.com/Microsoft/TypeScript/issues/10727
    //https://github.com/Microsoft/TypeScript/pull/11150

    const p = Object.assign({}, props);
    delete p.loading;
    delete p.variant;
    return p;
}

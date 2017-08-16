import * as React from 'react';
import { Loader } from '../loader/loader';
import * as classNames from 'classnames';

export type ButtonVariants = 'primary' | 'default' | 'info' | 'success' | 'warning' | 'danger';

export interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
    loading?: boolean;
    variant?: ButtonVariants;
}

export class Button extends React.Component<IButtonProps, {}> {
    constructor(props: IButtonProps) { super(props); }
    render() {
        const {
            children,
            loading = false,
            variant,
            type = 'button',
            ...rest,
        } = this.props;

        const buttonClass = getClasses(this.props);
        const disabled = loading || rest.disabled;
        const loader = loading
            ? <Loader />
            : null;

        return <button
            className={buttonClass}
            type={type}
            {...rest}
            disabled={disabled}>
            {loader}
            {children}
        </button>;
    }
}

function getClasses(props: IButtonProps) {
    return classNames({
        'c-button': true,
        'c-button--primary': props.variant === 'primary',
        'c-button--default': !props.variant || props.variant === 'default',
        'c-button--info': props.variant === 'info',
        'c-button--success': props.variant === 'success',
        'c-button--warning': props.variant === 'warning',
        'c-button--danger': props.variant === 'danger',
        'disabled': !!(props.loading || props.disabled),
    });
}

import * as React from 'react';
import { Loader } from '../loader/loader';
import * as classNames from 'classnames';

export type ButtonClasses = {
    always: string;
    enabled: string;
    disabled: string;
    loading: string;
};
export interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
    loading: boolean;
    classes: ButtonClasses;
}

export function Button(props: IButtonProps) {
    const {
        children,
        loading,
        type = 'button',
        classes,
        ...rest,
    } = props;

    const buttonClass = getClasses(props);

    const disabled = loading || rest.disabled;

    const loader = loading
        ? <Loader />
        : null;

    return <button
        {...rest}
        className={buttonClass}
        type={type}
        disabled={disabled}>
        {loader}
        <div>{children}</div>
    </button>;
}

function getClasses(props: IButtonProps) {
    const { classes } = props;
    if (!classes) { return ''; }

    const {
        always,
        disabled,
        enabled,
        loading
    } = classes;

    const isDisabled = props.loading || props.disabled;

    return classNames({
        [always]: !!always,
        [enabled]: !!enabled && !isDisabled,
        [disabled]: !!disabled && isDisabled,
        [loading]: !!loading && props.loading
    });
}

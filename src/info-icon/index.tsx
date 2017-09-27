import * as React from 'react';

export interface InfoIconProps {
    iconContent?: string;
    iconCustomTypeName?: string;
    handleClick?(): void;
}
/** Wraps a field with a label and help text and error message area. */
export class InfoIcon extends React.Component<InfoIconProps, {}> {

    render() {
        const {
            iconContent = '?',
            iconCustomTypeName,

        } = this.props;

        const iconClasses = `${iconCustomTypeName}`;

        return <span className={iconClasses} onClick={this.props.handleClick}>
            {iconContent}
        </span>;
    }
}

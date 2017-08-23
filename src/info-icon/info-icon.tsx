import * as React from 'react';

export interface InfoIconProps {
    iconContent?: string;
    iconCustomTypeName?:  string;
}
/** Wraps a field with a label and help text and error message area. */
export class InfoIcon extends React.Component<InfoIconProps, {}> {
    render() {
        const {
            iconContent = '?',
            iconCustomTypeName
            
        } = this.props;

        let tooltipCustomTypeClass:React.ReactNode = null;
        if (iconCustomTypeName != null) {
            tooltipCustomTypeClass = iconCustomTypeName;
        }


        return <span className={iconCustomTypeName}>
                {iconContent}
        </span>;
    }
}
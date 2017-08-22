import * as React from 'react';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
export type TooltipAlignment = 'middle' | 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
    tooltip? : string;
    tooltipPosition?: TooltipPosition;
    tooltipAlignment?: TooltipAlignment;
    tooltipCustomTypeName?: string;
}

/** Wraps a field with a label and help text and error message area. */
export class Tooltip extends React.Component<TooltipProps, {}> {
    render() {
        const {
            tooltip = '',
            tooltipPosition = 'top',
            tooltipAlignment = 'middle',
            tooltipCustomTypeName = ''
            
        } = this.props;

        let tooltipCustomTypeClass:React.ReactNode = null;
        if (tooltipCustomTypeName != null) {
            tooltipCustomTypeClass = '-t-' + tooltipCustomTypeName;
        }

        const tooltipPlacement = `hint-${tooltipPosition}-${tooltipAlignment}${tooltipCustomTypeClass} hint-fade-d-short hint-persist`;

        return <span aria-label={tooltip} data-hint={tooltip} className={tooltipPlacement}>
            <span></span>
        </span>;
    }
}
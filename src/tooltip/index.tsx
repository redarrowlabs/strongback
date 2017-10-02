import * as React from 'react';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
export type TooltipAlignment = 'middle' | 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
    tooltip?: string;
    tooltipPosition?: TooltipPosition;
    tooltipAlignment?: TooltipAlignment;
    tooltipCustomTypeName?: string;
    isOpen?: boolean;
}

/** Wraps a field with a label and help text and error message area. */
export class Tooltip extends React.Component<TooltipProps, {}> {

    render() {
        const {
            children,
            tooltip = '',
            tooltipPosition = 'top',
            tooltipAlignment = 'middle',
            tooltipCustomTypeName = '',
            isOpen = false,
        } = this.props;

        const toggleClass = isOpen ? 'hint-persist' : '';

        let tooltipCustomTypeClass: React.ReactNode = '';
        if (tooltipCustomTypeName !== '') {
            tooltipCustomTypeClass = '-t-' + tooltipCustomTypeName;
        }

        const tooltipClassNames = `hint-${tooltipPosition}-${tooltipAlignment}${tooltipCustomTypeClass} hint-fade-d-short ${toggleClass}`;

        return <span aria-label={tooltip} data-hint={tooltip} className={tooltipClassNames}>
            {children}
        </span>;
    }
}

import * as React from 'react';
import { format } from './format';

export interface LocalDateViewProps {
    date: string,
    pattern?: string
}

/**
 * Displays a local date (as it would be on a calendar, not tied to any
 * specific timezone)
 */
export function LocalDateView(props: LocalDateViewProps) {
    if (!props.date) { return <time>-</time>; }

    const isoDate = props.date.substring(0, 10);
    if (!isoDate) {
        return <label>-</label>;
    }

    const formattedDate = format(isoDate);

    return <time dateTime={isoDate}>{formattedDate}</time>;
}
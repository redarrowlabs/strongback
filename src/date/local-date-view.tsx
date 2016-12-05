import * as React from 'react';
import { format } from './format';
import { warn } from '../dev';

export interface LocalDateViewProps {
    date: string;
    pattern?: string;
}

/**
 * Displays a local date (as it would be on a calendar, not tied to any
 * specific timezone)
 */
export function LocalDateView(props: LocalDateViewProps) {
    const empty = <time>-</time>;

    if (!props.date) { return empty; }

    const isoDate = props.date.substring(0, 10);
    if (!isoDate) {
        return empty;
    }

    try {
        const formattedDate = format(isoDate);
        return <time dateTime={isoDate}>{formattedDate}</time>;
    } catch (e) {
        warn(`Provided date was not in ISO8061 format (yyyy-MM-dd): ${props.date}`);
        return empty;
    }
}

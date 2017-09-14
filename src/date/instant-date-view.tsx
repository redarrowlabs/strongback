/* tslint:disable max-line-length */
import * as React from 'react';
import { DateTimeFormatter, LocalDateTime, Instant } from 'js-joda';
import { warn } from '../dev';

export interface InstantDateViewProps {
    date: string;
    pattern?: string;
}

/**
 * Displays the date of an instant, relative to the viewer.
 */
export function InstantDateView(props: InstantDateViewProps) {
    const empty = <time>-</time>;
    if (!props.date) { return empty; }

    const isoDate = props.date.substring(0, 20);
    if (!isoDate) {
        return empty;
    }

    //Control characters:
    //https://github.com/js-joda/js-joda/blob/e728951a850dae8102b7fa68894535be43ec0521/src/format/DateTimeFormatterBuilder.js#L615

    //TODO js-joda should support locales soonish,
    //so we can default to system date format.
    const pattern = props.pattern || 'MM/dd/yyyy';
    const formatter = DateTimeFormatter.ofPattern(pattern);

    try {
        const localDate = LocalDateTime.ofInstant(
            Instant.parse(isoDate));

        const formattedDate = localDate.format(formatter);

        return <time dateTime={isoDate}>{formattedDate}</time>;
    } catch (e) {
        warn(`Provided datetime was not in ISO8061 format (yyyy-MM-ddTHH:mm:ssZ): ${props.date}`);
        return empty;
    }
}

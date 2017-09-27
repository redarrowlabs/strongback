/* tslint:disable max-line-length */
import * as React from 'react';
import { LocalTime, DateTimeFormatter } from 'js-joda';
import { warn } from '../dev';

export interface LocalTimeViewProps {
    date: string;
    pattern?: string;
}

/**
 * Displays a local time (as it would on a wall clock, 
 * not tied to any specific timezone)
 */
export function LocalTimeView(props: LocalTimeViewProps) {
    const empty = <time>-</time>;
    if (!props.date) { return empty; }

    const isoDate = props.date.substring(0, 8);
    if (!isoDate) {
        return empty;
    }

    //Control characters:
    //https://github.com/js-joda/js-joda/blob/e728951a850dae8102b7fa68894535be43ec0521/src/format/DateTimeFormatterBuilder.js#L615

    //TODO js-joda should support locales soonish,
    //so we can default to system date format.
    const pattern = props.pattern || 'h:mm';
    const formatter = DateTimeFormatter.ofPattern(pattern);

    try {
        const localDate = LocalTime.parse(isoDate);

        //In addition, AM/PM (a) can't be localized yet, so we'll
        //do it here until joda supports that.
        const ampm = localDate.hour() < 12 ? 'AM' : 'PM';

        const formattedDate = localDate.format(formatter);
        const dateTime = `${formattedDate} ${ampm}`;

        return <time dateTime={isoDate}>{dateTime}</time>;
    } catch (e) {
        warn(`Provided datetime was not in ISO8061 format (HH:mm:ss): ${props.date}`);
        return empty;
    }
}

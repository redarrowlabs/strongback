/* tslint:disable max-line-length */
import * as React from 'react';
import { LocalDateTime, DateTimeFormatter } from 'js-joda';
import { warn } from '../dev';

export interface LocalDateTimeViewProps {
    date: string;
    pattern?: string;
}

/**
 * Displays a local date and time (as it would be on a calendar and wall clock, 
 * not tied to any specific timezone)
 */
export function LocalDateTimeView(props: LocalDateTimeViewProps) {
    const empty = <time>-</time>;
    if (!props.date) { return empty; }

    const isoDate = props.date.substring(0, 19);
    if (!isoDate) {
        return empty;
    }

    //Control characters:
    //https://github.com/js-joda/js-joda/blob/e728951a850dae8102b7fa68894535be43ec0521/src/format/DateTimeFormatterBuilder.js#L615

    //TODO js-joda should support locales soonish,
    //so we can default to system date format.
    const pattern = props.pattern || 'MM/dd/yyyy h:mm';
    const formatter = DateTimeFormatter.ofPattern(pattern);

    try {
        const localDate = LocalDateTime.parse(isoDate);

        //In addition, AM/PM (a) can't be localized yet, so we'll
        //do it here until joda supports that.
        const ampm = localDate.hour() < 12 ? 'AM' : 'PM';

        const formattedDate = localDate.format(formatter);
        const dateTime = `${formattedDate} ${ampm}`;

        return <time dateTime={isoDate}>{dateTime}</time>;
    } catch (e) {
        warn(`Provided datetime was not in ISO8061 format (yyyy-MM-ddTHH:mm:ss): ${props.date}`);
        return empty;
    }
}

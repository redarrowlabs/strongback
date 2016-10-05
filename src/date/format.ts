import { LocalDate, DateTimeFormatter } from 'js-joda';

export function format(isoDate: string, pattern: string = 'MM/dd/yyyy'): string {
    //TODO js-joda should support locales soonish,
    //so we can default to system date format.
    const formatter = DateTimeFormatter.ofPattern(pattern);
    const formattedDate = LocalDate.parse(isoDate).format(formatter);
    return formattedDate
}
/// <reference types="react" />
export interface LocalDateTimeViewProps {
    date: string;
    pattern?: string;
}
/**
 * Displays a local date and time (as it would be on a calendar and wall clock,
 * not tied to any specific timezone)
 */
export declare function LocalDateTimeView(props: LocalDateTimeViewProps): JSX.Element;

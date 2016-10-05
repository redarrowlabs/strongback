/// <reference types="react" />
export interface LocalDateViewProps {
    date: string;
    pattern?: string;
}
/**
 * Displays a local date (as it would be on a calendar, not tied to any
 * specific timezone)
 */
export declare function LocalDateView(props: LocalDateViewProps): JSX.Element;

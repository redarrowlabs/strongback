/// <reference types="react" />
export interface LocalTimeViewProps {
    date: string;
    pattern?: string;
}
/**
 * Displays a local time (as it would on a wall clock,
 * not tied to any specific timezone)
 */
export declare function LocalTimeView(props: LocalTimeViewProps): JSX.Element;

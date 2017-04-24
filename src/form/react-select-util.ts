import * as ReactSelect from 'react-select';

export type ReactSelectValue = ReactSelect.Option
 | ReactSelect.Option[]
 | null;

export function isOptArray(option: ReactSelectValue)
    : option is ReactSelect.Option[] {
    return Array.isArray(option);
}

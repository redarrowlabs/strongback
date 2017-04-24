/// <reference types="react-select" />
import * as ReactSelect from 'react-select';
export declare type ReactSelectValue = ReactSelect.Option | ReactSelect.Option[] | null;
export declare function isOptArray(option: ReactSelectValue): option is ReactSelect.Option[];

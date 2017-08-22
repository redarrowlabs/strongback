import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Tooltip } from '../index';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
export type TooltipAlignment = 'middle' | 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
    tooltipProps: {
        tooltip? : string;
        tooltipPosition?: TooltipPosition;
        tooltipAlignment?: TooltipAlignment;
        tooltipCustomTypeName?: string;
    };
}

storiesOf('Tooltip', module)
    .add('example', () => {
        /* just so the tooltip appears on the page of the storybook */

        

        return <div style={{ padding: '100px', float: 'left'}}>
            
            <Tooltip tooltip='This is my tooltip text' tooltipAlignment='middle' tooltipPosition='bottom' />
            <br />
            <br />
            <br />
            <Tooltip tooltip='This tooltip has a custom color' tooltipAlignment='middle' tooltipPosition='bottom' tooltipCustomTypeName='info' />
        </div>;
    });

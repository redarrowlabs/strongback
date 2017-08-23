import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { InfoIcon } from '../info-icon/info-icon';
import { Button } from '../button/button';
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
    infoIconProps?: {
        iconContent?: string;
        iconCustomTypeName?:  string;
    }
}

storiesOf('Tooltip', module)
    .add('example', () => {
        /* just so the tooltip appears on the page of the storybook */

        

        return <div style={{ padding: '100px', float: 'left'}}>
            <h3>Tooltip on Info-Icon (bottom-right positioning)</h3>
            <Tooltip tooltip='This is my tooltip text' tooltipAlignment='middle' tooltipPosition='right'>
                <InfoIcon iconContent='?' iconCustomTypeName='round' />
            </Tooltip>
            <br />
            <br />
            <br />
            <h3>Tooltip on Button (top-middle positioning)</h3>
            <Tooltip tooltip='This tooltip has a custom color' tooltipAlignment='middle' tooltipPosition='top' tooltipCustomTypeName='info'>
                 <Button>
                    Hello World
                </Button>
            </Tooltip>
            <br />
            <br />
            <br />
            <h3>Tooltip on Text</h3>
            <Tooltip tooltip='This tooltip has a custom color' tooltipAlignment='middle' tooltipPosition='right' tooltipCustomTypeName='info'>
                <p>Text</p>
            </Tooltip>

        </div>;
    });

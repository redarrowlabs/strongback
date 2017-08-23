import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { InfoIcon } from '../index';

export interface InfoIconProps {
    iconProps: {
        iconContent?: string;
        iconCustomTypeName?:  string;
    }
}

storiesOf('InfoIcon', module)
    .add('example', () => {
        /* just so the tooltip appears on the page of the storybook */
        return <div style={{ padding: '100px', float: 'left'}}>
            
            <InfoIcon iconContent='?' />
        </div>;
    });

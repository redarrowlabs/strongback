import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { padding } from '../deco';

import { Button } from '../index';

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .addDecorator(padding)
    .add('example', () => {
        return <Button
            loading={boolean('Loading', false)}
            disabled={boolean('Disabled', false)}
            onClick={action('click')}
            classes={{
                always: text('Always Class', 'ba bw1 br2 pa2'),
                enabled: text('Enabled Class', 'bg-blue b--dark-blue white pointer'),
                disabled: text('Disabled Class', 'bg-grey b--black-90 black o-30'),
                loading: text('Loading Class', 'o-80 b--yellow'),
            }}>
            {text('Content', 'Hello World!')}
        </Button>;
    });

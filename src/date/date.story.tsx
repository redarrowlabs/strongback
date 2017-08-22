import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { padding } from '../deco';

import { LocalDateView, LocalDateTimeView } from '../index';

storiesOf('Date', module)
    .addDecorator(withKnobs)
    .addDecorator(padding)
    .add('example', () => {
        return <LocalDateView
            date={text('Date', '2016-06-06')} />;
    })

storiesOf('DateTime', module)
    .addDecorator(withKnobs)
    .addDecorator(padding)
    .add('example', () => {
        return <LocalDateTimeView
            date={text('Datetime', '2016-06-06T08:15:00Z')} />;
    })

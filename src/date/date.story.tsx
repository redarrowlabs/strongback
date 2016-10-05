import * as React from 'react';
import { storiesOf, module } from '@kadira/storybook';

import { LocalDateView } from './local-date-view';
import { LocalDateTimeView } from './local-date-time-view';

storiesOf('Date', module)
    .add('empty', () => {
        return <LocalDateView date='' />
    })
    .add('ideal', () => {
        return <LocalDateView date='2016-06-06' />
    })

storiesOf('DateTime', module)
    .add('empty', () => {
        return <LocalDateTimeView date='' />
    })
    .add('ideal', () => {
        return <LocalDateTimeView date='2016-06-06T08:15:00Z' />
    })


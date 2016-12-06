import * as React from 'react';
import { storiesOf, module } from '@kadira/storybook';

import { LocalDateView, LocalDateTimeView } from '../index';

storiesOf('Date', module)
    .add('empty', () => {
        return <LocalDateView date='' />;
    })
    .add('wrong format', () => {
        return <LocalDateView date='06/06/2016' />;
    })
    .add('ideal', () => {
        return <LocalDateView date='2016-06-06' />;
    });

storiesOf('DateTime', module)
    .add('empty', () => {
        return <LocalDateTimeView date='' />;
    })
    .add('wrong format', () => {
        return <LocalDateTimeView date='06/06/2016T08:15:00Z' />;
    })
    .add('ideal', () => {
        return <LocalDateTimeView date='2016-06-06T08:15:00Z' />;
    });

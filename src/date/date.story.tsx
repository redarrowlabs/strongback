import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { padding } from '../deco';

import {
    LocalDateView,
    LocalDateTimeView,
    LocalTimeView,
    InstantDateView,
    InstantDateTimeView,
} from './';

storiesOf('Dates and times', module)
    .addDecorator(withKnobs)
    .addDecorator(padding)
    .add('README', () => {
        return <div>
            <h1>Dates and Times</h1>
            <h2><i>We'll just use UTC for everything and...</i></h2>
            <p>
                While the urge to "just use UTC" for everything is strong, it's vital to understand the difference between LocalDates, LocalTimes, and Instants.
            </p>
            <h3>Instant</h3>
            <p>
                An Instant is a universally agreed upon instant in time, independent of where in the world one is. It's one particular moment in time. This is where to use UTC.
            </p>
            <h3>Local Date</h3>
            <p>
                A Local Date is a date like one might refer to on a calendar. It is not an agreed upon point in time, because two points on earth can simultaneously be in two different calendar days. Do NOT use UTC for these.
            </p>
            <p>
                Example - A person's birthday is on August 5th no matter where in the world.
            </p>
            <h3>Local Time</h3>
            <p>
                A Local Time is a time like one might refer to on a wall clock. It's not an agreed upon point in time, and it doesn't have an associated day or time zone. Do NOT use UTC for these.
            </p>
            <p>
                Example - An 8AM wake call is at 8AM, no matter where in the world.
            </p>
            <h3>Local DateTime</h3>
            <p>
                Like a combination of Local Date and Local Time. It's also not an agreed upon point in time. Do NOT use UTC for these.
            </p>
        </div>
    })
    .add('Example', () => {
        const instant = text('Instant', '2016-06-06T03:15:00Z');
        const localDateTime = text('Local DateTime', '2016-06-06T03:15:00');
        const localDate = text('Local Date', '2016-06-06');
        const localTime = text('Local Time', '03:15:00');

        return <div className='flex flex-column'>
            <div>
                <h1 className='dib'>Instant</h1>
                <span className='ml2'>
                    (this changes based on where you are!)
                </span>
            </div>
            <div className='mt2'>DateTime</div>
            <InstantDateTimeView date={instant} />
            <div className='mt2'>Date</div>
            <InstantDateView date={instant} />
            <h1>Local</h1>
            <div className='mt2'>DateTime</div>
            <LocalDateTimeView date={localDateTime} />
            <div className='mt2'>Date</div>
            <LocalDateView date={localDate} />
            <div className='mt2'>Time</div>
            <LocalTimeView date={localTime} />
        </div>;
    })
    ;

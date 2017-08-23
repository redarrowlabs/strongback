import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { padding } from '../deco';

storiesOf('Example', module)
    .addDecorator(withKnobs)
    .addDecorator(padding)
    .add('example', () => {
        const knob = text('Example', 'Hello World!');
        return <div onClick={action('click')}>
            <div>Use this as a story template!</div>
            <div>{knob}</div>
        </div>;
    });

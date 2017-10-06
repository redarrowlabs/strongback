import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';
import { padding } from '../deco';
import { TextControl, DateControl, CheckboxControl, RadioControl, SelectControl } from './';
import { RenderItemParam } from './ctrl';

storiesOf('Controls', module)
    .addDecorator(withKnobs)
    .addDecorator(padding)
    .add('text', () => {
        const input = {
            value: text('Value', 'Hello World!'),
            onChange: action('onChange'),
            onBlur: action('onBlur'),
            onFocus: action('onFocus'),
        };
        const options = {
            multiline: boolean('Multiline?', false),
            autoComplete: text('Autocomplete', 'off'),
            className: text('ClassName', 'ba b--green'),
        };

        return <TextControl input={input} options={options} />;
    })
    .add('date', () => {
        const input = {
            value: text('Value', '2018-01-01'),
            onChange: action('onChange'),
            onBlur: action('onBlur'),
            onFocus: action('onFocus'),
        };
        const options = {
            autoComplete: text('Autocomplete', 'off'),
            className: text('ClassName', 'ba b--green'),
        };

        return <DateControl input={input} options={options} />;
    })
    .add('checkbox', () => {
        const input = {
            value: object('Value', ['r']),
            onChange: action('onChange'),
            onBlur: action('onBlur'),
            onFocus: action('onFocus'),
        };
        const options = {
            autoComplete: text('Autocomplete', 'off'),
            options: object('Options', [
                { label: 'Red', value: 'r' },
                { label: 'Green', value: 'g' },
                { label: 'Blue', value: 'b' },
            ]),
            classes: {
                container: text('Container ClassName', 'ba b--green'),
                list: text('List ClassName', 'list ba pa2 ma1 b--blue'),
            },
            renderItem: boolean('Use Custom Render', false)
                ? (x: RenderItemParam) => <div className='dib'>
                    Item #{x.index}: <span className={`b ${x.item.label.toLocaleLowerCase()}`}>
                        {x.item.label} ({x.item.value})
                    </span>
                </div>
                : undefined,
        };

        return <CheckboxControl input={input} options={options} />;
    })
    .add('radio', () => {
        const input = {
            value: object('Value', ['r']),
            onChange: action('onChange'),
            onBlur: action('onBlur'),
            onFocus: action('onFocus'),
        };
        const options = {
            autoComplete: text('Autocomplete', 'off'),
            options: object('Options', [
                { label: 'Red', value: 'r' },
                { label: 'Green', value: 'g' },
                { label: 'Blue', value: 'b' },
            ]),
            classes: {
                container: text('Container ClassName', 'ba b--green'),
                list: text('List ClassName', 'list ba pa2 ma1 b--blue'),
            },
            renderItem: boolean('Use Custom Render', false)
                ? (x: RenderItemParam) => <div className='dib'>
                    Item #{x.index}: <span className={`b ${x.item.label.toLocaleLowerCase()}`}>
                        {x.item.label} ({x.item.value})
                    </span>
                </div>
                : undefined,
        };

        return <RadioControl input={input} options={options} />;
    })
    .add('select', () => {
        const input = {
            value: object('Value', 'r'),
            onChange: action('onChange'),
            onBlur: action('onBlur'),
            onFocus: action('onFocus'),
        };
        const options = {
            options: object('Options', [
                { label: 'Red', value: 'r' },
                { label: 'Green', value: 'g' },
                { label: 'Blue', value: 'b' },
            ]),
            multi: boolean('Multi', false),
            className: text('ClassName', 'ba b--green'),
        };

        return <SelectControl input={input} options={options} />;
    })
    ;

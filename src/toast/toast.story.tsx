import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { padding } from '../deco';

import { Button, Toast } from '../index';
import Alert from 'react-s-alert';

storiesOf('Toast', module)
    .addDecorator(padding)
    .add('example', () => {
        const handleClick = () => {
            Toast.info('Great job!');
        };

        return <div>
            <Button
                loading={false}
                classes={{ always: '', enabled: '', disabled: '', loading: '' }}
                onClick={handleClick}>Click</Button>
            <Alert />
        </div>;
    });

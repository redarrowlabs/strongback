import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Button, Toast } from '../index';
import Alert from 'react-s-alert';

storiesOf('Toast', module)
    .add('example', () => {
        const handleClick = () => {
            Toast.info('Great job!');
        };

        return <div>
            <Button onClick={handleClick}>Click</Button>
            <Alert />
        </div>;
    });

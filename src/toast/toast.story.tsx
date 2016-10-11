import * as React from 'react';
import { storiesOf, module } from '@kadira/storybook';

import { Button } from '../button/button';
import { info } from './toast-service';
import Alert from 'react-s-alert';

storiesOf('Toast', module)
    .add('example', () => {
        const handleClick = () => {
            info('Great job!')
        }

        return <div>
            <Button onClick={handleClick}>Click</Button>
            <Alert />
        </div>
    })
import * as React from 'react';
import { storiesOf, module } from '@kadira/storybook';

import { Button } from '../button/button';
import { info, setInfo, defaultInfo } from './toast-service';
import Alert from 'react-s-alert';

storiesOf('Toast', module)
    .add('example', () => {
        //Provide an implementation for toastin'
        //This can be done once, in your app index.
        setInfo(defaultInfo);

        const handleClick = () => {
            info('Great job!')
        }

        return <div>
            <Button onClick={handleClick}>Click</Button>
            <Alert />
        </div>
    })
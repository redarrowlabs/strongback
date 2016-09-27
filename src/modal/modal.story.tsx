import * as React from 'react';
import { storiesOf, action, module } from '@kadira/storybook';

import { Modal } from './modal';

storiesOf('Modal', module)
    .add('ideal', () => {
        return <Modal isOpen={true}/>
    })
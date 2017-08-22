import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { padding } from '../deco';

import { Modal, Button } from '../index';


storiesOf('Modal', module)
    .addDecorator(withKnobs)
    .addDecorator(padding)
    .add('example', () => {
        const header = <h1>Modals</h1>;
        const footer = <div>
            <Button
                classes={{ always: '', enabled: '', disabled: '', loading: '' }}
                loading={false}
                onClick={action('save')}>
                Save
            </Button>
            <Button
                classes={{ always: '', enabled: '', disabled: '', loading: '' }}
                loading={false}
                onClick={action('cancel')}
            >Cancel
            </Button>
        </div>;

        return <div>
            <div tabIndex={0}>Can't tab outside modal</div>
            <Modal
                header={header}
                footer={footer}
                isOpen={boolean('IsOpen', true)}>
                <ol>
                    <li tabIndex={0}>Fully</li>
                    <li tabIndex={0}>Keyboard</li>
                    <li tabIndex={0}>Accessible</li>
                </ol>
            </Modal>
        </div>;
    });

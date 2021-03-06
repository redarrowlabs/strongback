import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
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

        const isOpen = boolean('IsOpen', true);
        const content = text(
            'Content Classname',
            'absolute bg-white shadow-2 top-2 left-2 right-2 bottom-2 pa3 ba bw2 b--green');
        const overlay = text(
            'Overlay Classname',
            'fixed bg-black-50 top-0 left-0 right-0 bottom-0');

        return <div>
            <div tabIndex={0}>Can't tab outside modal</div>
            <Modal
                header={header}
                footer={footer}
                isOpen={isOpen}
                contentClassName={content}
                overlayClassName={overlay}>
                <ol>
                    <li tabIndex={0}>Fully</li>
                    <li tabIndex={0}>Keyboard</li>
                    <li tabIndex={0}>Accessible</li>
                </ol>
            </Modal>
        </div>;
    });

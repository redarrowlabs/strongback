import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Modal, Button } from '../index';

storiesOf('Modal', module)
    .add('open', () => {
        const header = <h1>Modals</h1>;
        const footer = <div>
            <Button onClick={action('save')}>Save</Button>
            <Button onClick={action('cancel')} variant='default'>Cancel</Button>
        </div>;

        return <div>
            <div tabIndex={0}>Can't tab outside modal</div>
            <Modal
                header={header}
                footer={footer}
                isOpen={true}>
                <ol>
                    <li tabIndex={0}>Fully</li>
                    <li tabIndex={0}>Keyboard</li>
                    <li tabIndex={0}>Accessible</li>
                </ol>
            </Modal>
        </div>;
    })
    .add('behavior', () => {
        return <ModalExample />;
    });

class ModalExample extends React.Component<{}, any> {
    constructor(props: {}) {
        super(props);

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            open: false,
        };
    }
    render() {
        const header = <h1>Warning</h1>;
        const footer = <div>
            <Button onClick={this.handleClose}>
                Fire!
            </Button>
            <Button onClick={this.handleClose} variant='default'>
                Maybe not...
            </Button>
        </div>;

        return <div>
            <Button
                loading={this.state.loading}
                onClick={this.handleOpen}>
                Open
            </Button>
            <Modal
                isOpen={this.state.open}
                header={header}
                footer={footer} >
                Are you sure you want to fire the missles?
            </Modal>
        </div>;
    }

    handleOpen(...args: any[]) {
        action('click')(...args);

        this.setState({
            open: true,
        });
    }

    handleClose(...args: any[]) {
        action('click')(...args);

        this.setState({
            open: false,
        });
    }
}

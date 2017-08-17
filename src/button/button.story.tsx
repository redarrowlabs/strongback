import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '../index';

storiesOf('Button', module)
    .add('ideal', () => {
        return <div>
            <Button
                onClick={action('click')}>
                Hello World
            </Button>
            <Button
                variant='primary'
                onClick={action('click')}>
                Cancel
            </Button>
            <Button
                variant='info'
                onClick={action('click')}>
                Info
            </Button>
            <Button
                variant='success'
                onClick={action('click')}>
                Complete
            </Button>
            <Button
                variant='warning'
                onClick={action('click')}>
                Review
            </Button>
            <Button
                variant='danger'
                onClick={action('click')}>
                Delete
            </Button>
        </div>;
    })
    .add('disabled', () => {
        return <Button
            disabled={true}
            onClick={action('click')}>
            Hello World
            </Button>;
    })
    .add('loading', () => {
        return <Button loading={true}>Saving</Button>;
    })
    .add('loading behavior', () => {
        return <LoadingExample />;
    });

class LoadingExample extends React.Component<{}, any> {
    constructor(props: {}) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            loading: false,
        };
    }
    render() {
        const text = this.state.loading
            ? 'Saving...'
            : 'Save';

        return <Button
            loading={this.state.loading}
            onClick={this.handleClick}>
            {text}
        </Button>;
    }

    handleClick(...args: any[]) {
        action('click')(...args);

        this.setState({
            loading: true,
        });

        delay(3500).then(() => {
            this.setState({
                loading: false,
            });
        });
    }
}

function delay(ms: number) {
    return new Promise<{}>((res) => setTimeout(res, ms));
}

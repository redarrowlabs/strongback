import * as React from 'react';
import { storiesOf, action, module } from '@kadira/storybook';

import { Button } from './index.tsx';

storiesOf('Button', module)
    .add('ideal', () => {
        return <Button
            onClick={action('click')}>
            Hello World
            </Button>
    })
    .add('disabled', () => {
        return <Button
            disabled={true}
            onClick={action('click')}>
            Hello World
            </Button>
    })
    .add('loading', () => {
        return <Button loading={true}>Saving...</Button>
    })
    .add('loading behavior', () => {
        return <LoadingExample />
    })

class LoadingExample extends React.Component<{}, any>{
    constructor(props: {}) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            loading: false
        }
    }
    render() {
        const text = this.state.loading
            ? 'Saving...'
            : 'Save'

        return <Button
            loading={this.state.loading}
            onClick={this.handleClick}>
            {text}
        </Button>
    }

    handleClick(...args: any[]) {
        action('click')(...args);

        this.setState({
            loading: true
        })

        delay(3500).then(() => {
            this.setState({
                loading: false
            })
        })
    }
}

function delay(ms: number) {
    return new Promise<{}>((res, rej) => setTimeout(res, ms))
}
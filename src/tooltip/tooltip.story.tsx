import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { InfoIcon } from '../info-icon/info-icon';
import { Button } from '../button/button';
import { Tooltip } from '../index';


storiesOf('Tooltip', module)
    .add('Tooltip on Info Icon', () => {
        /* just so the tooltip appears on the page of the storybook */
        return <div style={{ padding: '100px', float: 'left'}}>
            <Tooltip tooltip='This is my tooltip text' tooltipAlignment='middle' tooltipPosition='right'>
                <InfoIcon iconContent='?' iconCustomTypeName='round' />
            </Tooltip>
        </div>
    })
    .add('Tooltip on Button', () => {
        return <div style={{ padding: '100px', float: 'left'}}>
        <Tooltip tooltip='This tooltip has a custom color' tooltipAlignment='middle' tooltipPosition='top' tooltipCustomTypeName='info'>
                <Button>
                Hello World
            </Button>
        </Tooltip>
        </div>
    })
    .add('Tooltip on Text', () => {
        return <div style={{ padding: '100px', float: 'left'}}>
            <Tooltip tooltip='This tooltip has a custom color' tooltipAlignment='middle' tooltipPosition='right'>
                Text
            </Tooltip>
        </div>;
    })
    .add('tooltip open on click example', () => {
        return <div style={{ padding: '100px', float: 'left'}}>
            <TooltipClickExample />

            </div>;
    });

    interface TooltipExampleState {
        isOpen: boolean;
    }
    class TooltipClickExample extends React.Component<{},TooltipExampleState> {
        constructor(props: any) {
            super(props);
            this.state = { isOpen: false };
            this.handleClick = this.handleClick.bind(this)
        }

        handleClick() {
            if (this.state.isOpen === false) {
                this.setState({ isOpen: true });
            } else {
                this.setState({isOpen: false});
            }
            
        }

        render() {
            return <Tooltip tooltip='This is my tooltip text' tooltipAlignment='middle' tooltipPosition='right' isOpen={this.state.isOpen}>
                <InfoIcon iconContent='?' iconCustomTypeName='round' handleClick={this.handleClick} />
            </Tooltip>;
        }
    }
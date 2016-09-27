import * as React from 'react';
import Highlight from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/styles';
export class Code extends React.Component {
    constructor(props) { super(props); }
    render() {
        const options = {
            readOnly: true
        };
        const { language = 'javascript', children = 'No code.' } = this.props;
        return React.createElement(Highlight, { language: language, style: tomorrowNight }, children);
    }
}

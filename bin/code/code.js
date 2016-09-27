import * as React from 'react';
import Highlight from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/styles';
import Clipboard from 'react-clip';
import { info } from '../toast/toast-service';
export class Code extends React.Component {
    constructor(props) {
        super(props);
        this.handleCopy = this.handleCopy.bind(this);
    }
    render() {
        const { language = 'javascript', children = '' } = this.props;
        const copy = children
            ? React.createElement(Clipboard, { "data-clipboard-text": children, onSuccess: this.handleCopy }, "copy")
            : null;
        return React.createElement("div", null,
            React.createElement(Highlight, { language: language, style: tomorrowNight }, children || '[nothing]'),
            copy);
    }
    handleCopy() {
        info('Copied');
    }
}

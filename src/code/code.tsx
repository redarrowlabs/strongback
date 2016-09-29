import * as React from 'react';
import Highlight from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/styles';
import Clipboard from 'react-clip/dist/react-clipboard';
import { info } from '../toast/toast-service';

export interface ICodeProps {
    language?: 'javascript' | 'cs'

}

export class Code extends React.Component<ICodeProps, {}>{
    constructor(props: ICodeProps) {
        super(props);
        this.handleCopy = this.handleCopy.bind(this);
    }
    render() {
        const {
            language = 'javascript',
            children = ''
        } = this.props;

        const copy = children
            ? <Clipboard
                data-clipboard-text={children}
                onSuccess={this.handleCopy}
                >copy</Clipboard>
            : null

        return <div>
            <Highlight language={language} style={tomorrowNight}>
                {children || '[nothing]'}
            </Highlight>
            {copy}
        </div>
    }

    handleCopy() {
        info('Copied');
    }
}
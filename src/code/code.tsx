import * as React from 'react';
import Highlight from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/styles';
import { info } from '../toast/toast-service';
import { Clipboard } from '../button/clipboard';

export interface ICodeProps {
    language?: 'javascript' | 'cs';
}

export class Code extends React.Component<ICodeProps, {}> {
    constructor(props: ICodeProps) {
        super(props);
        this.handleCopy = this.handleCopy.bind(this);
    }
    render() {
        const {
            language = 'javascript',
            children = '',
        } = this.props;

        const code = children as string;

        const copy = code
            ? <Clipboard
                text={code}
                onCopy={this.handleCopy}
                >copy</Clipboard>
            : null;

        return <div>
            <Highlight language={language} style={tomorrowNight}>
                {code || '[nothing]'}
            </Highlight>
            {copy}
        </div>;
    }

    handleCopy() {
        info('Copied');
    }
}

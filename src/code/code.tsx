import * as React from 'react';
import ReactModal from 'react-modal';
import classNames from 'classnames';
import Highlight from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/styles';
import Clipboard from 'react-clip';
import {Button} from '../button/button';

export interface ICodeProps {
    language?: 'javascript' | 'cs'

}

export class Code extends React.Component<ICodeProps, {}>{
    constructor(props: ICodeProps) { super(props); }
    render() {
        const options = {
            readOnly: true
        }

        const {
            language = 'javascript',
            children = ''
        } = this.props;

        const copy = children
            ? <Clipboard data-clipboard-text={children}>copy</Clipboard>
            : null

        return <div>
            <Highlight language={language} style={tomorrowNight}>
                {children || '[nothing]' }
            </Highlight>
            {copy}
        </div>
    }
}
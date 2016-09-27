import * as React from 'react';
import ReactModal from 'react-modal';
import classNames from 'classnames';
import Highlight from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/styles';

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
            children = 'No code.'
        } = this.props;

        return <Highlight language={language} style={tomorrowNight}>
            {children}
        </Highlight>
    }
}
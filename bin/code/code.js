"use strict";
const React = require("react");
const react_syntax_highlighter_1 = require("react-syntax-highlighter");
const styles_1 = require("react-syntax-highlighter/dist/styles");
const react_clipboard_1 = require("react-clip/dist/react-clipboard");
const toast_service_1 = require("../toast/toast-service");
class Code extends React.Component {
    constructor(props) {
        super(props);
        this.handleCopy = this.handleCopy.bind(this);
    }
    render() {
        const { language = 'javascript', children = '' } = this.props;
        const copy = children
            ? React.createElement(react_clipboard_1.default, { "data-clipboard-text": children, onSuccess: this.handleCopy }, "copy")
            : null;
        return React.createElement("div", null,
            React.createElement(react_syntax_highlighter_1.default, { language: language, style: styles_1.tomorrowNight }, children || '[nothing]'),
            copy);
    }
    handleCopy() {
        toast_service_1.info('Copied');
    }
}
exports.Code = Code;

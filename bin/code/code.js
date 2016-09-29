"use strict";
const React = require("react");
const react_syntax_highlighter_1 = require("react-syntax-highlighter");
const styles_1 = require("react-syntax-highlighter/dist/styles");
const toast_service_1 = require("../toast/toast-service");
const clipboard_1 = require("../button/clipboard");
console.log(clipboard_1.Clipboard);
class Code extends React.Component {
    constructor(props) {
        super(props);
        this.handleCopy = this.handleCopy.bind(this);
    }
    render() {
        const { language = 'javascript', children = '' } = this.props;
        const code = children;
        const copy = code
            ? React.createElement(clipboard_1.Clipboard, { text: code, onCopy: this.handleCopy }, "copy")
            : null;
        return React.createElement("div", null,
            React.createElement(react_syntax_highlighter_1.default, { language: language, style: styles_1.tomorrowNight }, code || '[nothing]'),
            copy);
    }
    handleCopy() {
        toast_service_1.info('Copied');
    }
}
exports.Code = Code;

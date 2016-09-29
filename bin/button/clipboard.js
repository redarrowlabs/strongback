"use strict";
const ReactClipboard = require("react-clip/dist/react-clipboard");
const React = require("react");
//Something about the typings are off.
const AnyClipboard = ReactClipboard;
function Clipboard(props) {
    return React.createElement(AnyClipboard, { "data-clipboard-text": props.text, onSuccess: props.onCopy }, "Copy");
}
exports.Clipboard = Clipboard;

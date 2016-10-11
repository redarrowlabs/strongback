"use strict";
var ReactClipboard = require("react-clip/dist/react-clipboard");
var React = require("react");
//Something about the typings are off.
var AnyClipboard = ReactClipboard;
function Clipboard(props) {
    return React.createElement(AnyClipboard, { "data-clipboard-text": props.text, onSuccess: props.onCopy }, "Copy");
}
exports.Clipboard = Clipboard;
//# sourceMappingURL=clipboard.js.map
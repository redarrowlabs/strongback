"use strict";
const React = require("react");
const format_1 = require("./format");
function DateView(props) {
    if (!props.date) {
        return React.createElement("time", null, "-");
    }
    const isoDate = props.date.substring(0, 10);
    if (!isoDate) {
        return React.createElement("label", null, "-");
    }
    const formattedDate = format_1.format(isoDate);
    return React.createElement("time", { dateTime: isoDate }, formattedDate);
}
exports.DateView = DateView;
//# sourceMappingURL=date-view.js.map
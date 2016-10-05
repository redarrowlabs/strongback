"use strict";
const React = require("react");
const format_1 = require("./format");
/**
 * Displays a local date (as it would be on a calendar, not tied to any
 * specific timezone)
 */
function LocalDateView(props) {
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
exports.LocalDateView = LocalDateView;
//# sourceMappingURL=local-date-view.js.map
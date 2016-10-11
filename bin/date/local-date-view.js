"use strict";
var React = require("react");
var format_1 = require("./format");
/**
 * Displays a local date (as it would be on a calendar, not tied to any
 * specific timezone)
 */
function LocalDateView(props) {
    if (!props.date) {
        return React.createElement("time", null, "-");
    }
    var isoDate = props.date.substring(0, 10);
    if (!isoDate) {
        return React.createElement("label", null, "-");
    }
    var formattedDate = format_1.format(isoDate);
    return React.createElement("time", { dateTime: isoDate }, formattedDate);
}
exports.LocalDateView = LocalDateView;
//# sourceMappingURL=local-date-view.js.map
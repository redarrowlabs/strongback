"use strict";
var React = require("react");
var format_1 = require("./format");
var dev_1 = require("../dev");
/**
 * Displays a local date (as it would be on a calendar, not tied to any
 * specific timezone)
 */
function LocalDateView(props) {
    var empty = React.createElement("time", null, "-");
    if (!props.date) {
        return empty;
    }
    var isoDate = props.date.substring(0, 10);
    if (!isoDate) {
        return empty;
    }
    try {
        var formattedDate = format_1.format(isoDate);
        return React.createElement("time", { dateTime: isoDate }, formattedDate);
    }
    catch (e) {
        dev_1.warn("Provided date was not in ISO8061 format (yyyy-MM-dd): " + props.date);
        return empty;
    }
}
exports.LocalDateView = LocalDateView;
//# sourceMappingURL=local-date-view.js.map
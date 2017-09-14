"use strict";
exports.__esModule = true;
/* tslint:disable max-line-length */
var React = require("react");
var js_joda_1 = require("js-joda");
var dev_1 = require("../dev");
/**
 * Displays the date of an instant, relative to the viewer.
 */
function InstantDateView(props) {
    var empty = React.createElement("time", null, "-");
    if (!props.date) {
        return empty;
    }
    var isoDate = props.date.substring(0, 20);
    if (!isoDate) {
        return empty;
    }
    //Control characters:
    //https://github.com/js-joda/js-joda/blob/e728951a850dae8102b7fa68894535be43ec0521/src/format/DateTimeFormatterBuilder.js#L615
    //TODO js-joda should support locales soonish,
    //so we can default to system date format.
    var pattern = props.pattern || 'MM/dd/yyyy';
    var formatter = js_joda_1.DateTimeFormatter.ofPattern(pattern);
    try {
        var localDate = js_joda_1.LocalDateTime.ofInstant(js_joda_1.Instant.parse(isoDate));
        var formattedDate = localDate.format(formatter);
        return React.createElement("time", { dateTime: isoDate }, formattedDate);
    }
    catch (e) {
        dev_1.warn("Provided datetime was not in ISO8061 format (yyyy-MM-ddTHH:mm:ssZ): " + props.date);
        return empty;
    }
}
exports.InstantDateView = InstantDateView;
//# sourceMappingURL=instant-date-view.js.map
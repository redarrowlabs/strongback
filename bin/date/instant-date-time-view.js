"use strict";
exports.__esModule = true;
/* tslint:disable max-line-length */
var React = require("react");
var js_joda_1 = require("js-joda");
var dev_1 = require("../dev");
/**
 * Displays an instant date and time, relative to the viewer.
 */
function InstantDateTimeView(props) {
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
    var pattern = props.pattern || 'MM/dd/yyyy h:mm';
    var formatter = js_joda_1.DateTimeFormatter.ofPattern(pattern);
    try {
        var localDate = js_joda_1.LocalDateTime.ofInstant(js_joda_1.Instant.parse(isoDate));
        //In addition, AM/PM (a) can't be localized yet, so we'll
        //do it here until joda supports that.
        var ampm = localDate.hour() < 12 ? 'AM' : 'PM';
        var formattedDate = localDate.format(formatter);
        var dateTime = formattedDate + " " + ampm;
        return React.createElement("time", { dateTime: isoDate }, dateTime);
    }
    catch (e) {
        dev_1.warn("Provided datetime was not in ISO8061 format (yyyy-MM-ddTHH:mm:ssZ): " + props.date);
        return empty;
    }
}
exports.InstantDateTimeView = InstantDateTimeView;
//# sourceMappingURL=instant-date-time-view.js.map
"use strict";
var React = require("react");
var js_joda_1 = require("js-joda");
/**
 * Displays a local date and time (as it would be on a calendar and wall clock,
 * not tied to any specific timezone)
 */
function LocalDateTimeView(props) {
    if (!props.date) {
        return React.createElement("time", null, "-");
    }
    var isoDate = props.date.substring(0, 19);
    if (!isoDate) {
        return React.createElement("label", null, "-");
    }
    //Control characters:
    //https://github.com/js-joda/js-joda/blob/e728951a850dae8102b7fa68894535be43ec0521/src/format/DateTimeFormatterBuilder.js#L615
    //TODO js-joda should support locales soonish,
    //so we can default to system date format.
    var pattern = props.pattern || 'MM/dd/yyyy h:mm';
    var formatter = js_joda_1.DateTimeFormatter.ofPattern(pattern);
    var localDate = js_joda_1.LocalDateTime.parse(isoDate);
    //In addition, AM/PM (a) can't be localized yet, so we'll
    //do it here until joda supports that.
    var ampm = localDate.hour() < 12 ? 'AM' : 'PM';
    var formattedDate = localDate.format(formatter);
    var dateTime = formattedDate + " " + ampm;
    return React.createElement("time", { dateTime: isoDate }, dateTime);
}
exports.LocalDateTimeView = LocalDateTimeView;
//# sourceMappingURL=local-date-time-view.js.map
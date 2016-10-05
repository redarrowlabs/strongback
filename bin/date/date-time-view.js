"use strict";
const React = require("react");
const js_joda_1 = require("js-joda");
function DateTimeView(props) {
    if (!props.date) {
        return React.createElement("time", null, "-");
    }
    const isoDate = props.date.substring(0, 19);
    if (!isoDate) {
        return React.createElement("label", null, "-");
    }
    //Control characters:
    //https://github.com/js-joda/js-joda/blob/e728951a850dae8102b7fa68894535be43ec0521/src/format/DateTimeFormatterBuilder.js#L615
    //TODO js-joda should support locales soonish,
    //so we can default to system date format.
    const pattern = props.pattern || 'MM/dd/yyyy h:mm';
    const formatter = js_joda_1.DateTimeFormatter.ofPattern(pattern);
    const localDate = js_joda_1.LocalDateTime.parse(isoDate);
    //In addition, AM/PM (a) can't be localized yet, so we'll
    //do it here until joda supports that.
    const ampm = localDate.hour < 12 ? 'AM' : 'PM';
    const formattedDate = localDate.format(formatter);
    const dateTime = `${formattedDate} ${ampm}`;
    return React.createElement("time", { dateTime: isoDate }, dateTime);
}
exports.DateTimeView = DateTimeView;
//# sourceMappingURL=date-time-view.js.map
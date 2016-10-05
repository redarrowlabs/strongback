"use strict";
const js_joda_1 = require("js-joda");
function format(isoDate, pattern = 'MM/dd/yyyy') {
    //TODO js-joda should support locales soonish,
    //so we can default to system date format.
    const formatter = js_joda_1.DateTimeFormatter.ofPattern(pattern);
    const formattedDate = js_joda_1.LocalDate.parse(isoDate).format(formatter);
    return formattedDate;
}
exports.format = format;
//# sourceMappingURL=format.js.map
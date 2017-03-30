"use strict";
exports.__esModule = true;
var js_joda_1 = require("js-joda");
function format(isoDate, pattern) {
    if (pattern === void 0) { pattern = 'MM/dd/yyyy'; }
    //TODO js-joda should support locales soonish,
    //so we can default to system date format.
    var formatter = js_joda_1.DateTimeFormatter.ofPattern(pattern);
    var formattedDate = js_joda_1.LocalDate.parse(isoDate).format(formatter);
    return formattedDate;
}
exports.format = format;
//# sourceMappingURL=format.js.map
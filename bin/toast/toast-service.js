"use strict";
exports.__esModule = true;
var infoFn = function () {
    throw new Error("\n        No toast implementation has been specified. To fix this:\n        A) call useDefaultImplementations\n        or\n        B) call setInfo to specify a toast function.\n        ");
};
function info(message) {
    infoFn(message);
}
exports.info = info;
function setInfo(fn) {
    infoFn = fn;
}
exports.setInfo = setInfo;
//# sourceMappingURL=toast-service.js.map
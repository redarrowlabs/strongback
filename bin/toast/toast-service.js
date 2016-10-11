"use strict";
let infoFn = () => {
    throw new Error(`
        No toast implementation has been specified. To fix this:
        A) call useDefaultImplementations
        or
        B) call setInfo to specify a toast function.
        `);
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
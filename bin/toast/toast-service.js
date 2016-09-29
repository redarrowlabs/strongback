"use strict";
const react_s_alert_1 = require("react-s-alert");
let infoFn = () => { throw new Error('No alert implementation'); };
function defaultInfo(message) {
    react_s_alert_1.default.info(message, {
        position: 'bottom-right',
        effect: 'flip'
    });
}
exports.defaultInfo = defaultInfo;
function info(message) {
    infoFn(message);
}
exports.info = info;
function setInfo(fn) {
    infoFn = fn;
}
exports.setInfo = setInfo;

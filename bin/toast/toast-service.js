"use strict";
const react_s_alert_1 = require("react-s-alert");
function info(message) {
    react_s_alert_1.default.info(message, {
        position: 'bottom-right',
        effect: 'flip'
    });
}
exports.info = info;

"use strict";
const loader_1 = require("./loader/loader");
const halogen_1 = require("halogen");
const toast_service_1 = require("./toast/toast-service");
const react_s_alert_1 = require("react-s-alert");
function defaultInfo(message) {
    react_s_alert_1.default.info(message, {
        position: 'bottom-right',
        effect: 'flip'
    });
}
/**
 * Provides an opinionated set of default implementations.
 * These can be overridden.
 */
function useDefaultImplementations() {
    //Loading spinner
    loader_1.setLoader(halogen_1.PulseLoader);
    //Info toast
    toast_service_1.setInfo(defaultInfo);
}
exports.useDefaultImplementations = useDefaultImplementations;
//# sourceMappingURL=defaults.js.map
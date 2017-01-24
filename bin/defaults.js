"use strict";
// This file conditionally requires dependencies.
// This is because run-on-require code in some
// third party packages can cause older/odd browsers 
// to break. If the caller is requesting the defaults,
// assume modern support.
var toast_service_1 = require("./toast/toast-service");
function defaultInfo(message) {
    var Alert = require('react-s-alert')["default"];
    Alert.info(message, {
        effect: 'flip',
        position: 'bottom-right'
    });
}
/**
 * Provides an opinionated set of default implementations.
 * These can be overridden.
 */
function useDefaultImplementations() {
    // Info toast
    toast_service_1.setInfo(defaultInfo);
}
exports.useDefaultImplementations = useDefaultImplementations;
//# sourceMappingURL=defaults.js.map
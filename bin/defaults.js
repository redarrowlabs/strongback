"use strict";
// This file conditionally requires dependencies.
// This is because run-on-require code in some
// third party packages can cause older/odd browsers 
// to break. If the caller is requesting the defaults,
// assume modern support.
var loader_1 = require("./loader/loader");
var toast_service_1 = require("./toast/toast-service");
function defaultInfo(message) {
    var Alert = require('react-s-alert');
    Alert.info(message, {
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
    var PulseLoader = require('halogen').PulseLoader;
    loader_1.setLoader(PulseLoader);
    //Info toast
    toast_service_1.setInfo(defaultInfo);
}
exports.useDefaultImplementations = useDefaultImplementations;
//# sourceMappingURL=defaults.js.map
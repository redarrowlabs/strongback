// This file conditionally requires dependencies.
// This is because run-on-require code in some
// third party packages can cause older/odd browsers 
// to break. If the caller is requesting the defaults,
// assume modern support.
import { setLoader } from './loader/loader';
import { setInfo } from './toast/toast-service';

declare var require: any;

function defaultInfo(message: string) {
    const Alert = require('react-s-alert');

    Alert.info(message, {
        effect: 'flip',
        position: 'bottom-right',
    });
}

/**
 * Provides an opinionated set of default implementations.
 * These can be overridden.
 */
export function useDefaultImplementations() {
    // Loading spinner
    const {PulseLoader} = require('halogen');
    setLoader(PulseLoader);

    // Info toast
    setInfo(defaultInfo);
}

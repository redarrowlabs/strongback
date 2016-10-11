import { setLoader } from './loader/loader'
import { PulseLoader } from 'halogen'

import { setInfo } from './toast/toast-service';
import Alert from 'react-s-alert';

function defaultInfo(message: string) {
    Alert.info(message, {
        position: 'bottom-right',
        effect: 'flip'
    });
}

/**
 * Provides an opinionated set of default implementations.
 * These can be overridden.
 */
export function useDefaultImplementations() {
    //Loading spinner
    setLoader(PulseLoader);

    //Info toast
    setInfo(defaultInfo);
}
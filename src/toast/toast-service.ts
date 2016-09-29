import Alert from 'react-s-alert';

let infoFn: Function =
    () => { throw new Error('No alert implementation'); }

export function defaultInfo(message: string) {
    Alert.info(message, {
        position: 'bottom-right',
        effect: 'flip'
    });
}

export function info(message: string) {
    infoFn(message);
}

export function setInfo(fn: (m: string) => void) {
    infoFn = fn;
}
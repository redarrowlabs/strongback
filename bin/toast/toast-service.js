import Alert from 'react-s-alert';
export function info(message) {
    Alert.info(message, {
        position: 'bottom-right',
        effect: 'flip'
    });
}

import Alert from 'react-s-alert';

export function info(message: string){
    Alert.info(message, {
        position: 'bottom-right',
        effect: 'flip'
    });
}
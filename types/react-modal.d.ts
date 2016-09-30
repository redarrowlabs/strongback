declare module 'react-modal' {
    interface ModalProps {
        isOpen: boolean
        className?: string
        overlayClassName?: string
        shouldCloseOnOverlayClick?: boolean
    }

    class ReactModal extends React.Component<ModalProps, {}>{ }

    export = ReactModal
}
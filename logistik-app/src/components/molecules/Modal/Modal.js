import React, {Component} from 'react';

import ModalTrigger from "./ModalTrigger/ModalTrigger";
import ModalContent from "./ModalContent/ModalContent";

export class  Modal extends Component {
    
    constructor() {
        super();
        this.state = {
            isShown: false
        };
    }

    showModal = () => {
        this.setState({isShown: true}, () => {
            //this.closeButton.focus();
        });
        this.toggleScrollLock();
    };
    
    closeModal = () => {
        this.setState({ isShown: false });
        this.TriggerButton.focus();
        this.toggleScrollLock();
    };
    
    onKeyDown = event => {
        if (event.key === 'Enter') {
            this.closeModal();
        }
    };
    
    onClickOutside = event => {
        console.log('--onClickOutside--');
        if (this.modal && this.modal.contains(event.target)) return;
        this.closeModal();
    };
    
    toggleScrollLock = () => {
        document.querySelector('body').classList.toggle('scroll-lock');
    };
    
    render() {
        return (
            <React.Fragment>

                    <ModalTrigger
                        showModal={ this.showModal }
                        buttonRef={ev => (this.TriggerButton = ev)}
                        triggerText={this.props.buttonText}
                        awesomeIcon={this.props.awesomeIcon}
                    />
                    {
                        this.state.isShown  ? (
                            <ModalContent
                                modalRef={ev => (this.modal = ev)}
                                buttonRef={ev => (this.closeButton = ev)}
                                closeModal={this.closeModal}
                                content={ this.props.modalContent  }
                                onKeyDown={this.onKeyDown}
                                onClickOutside={this.onClickOutside}
                            />
                         ) : null
                    
                    }
            </React.Fragment>
        );
    }
}

export default Modal;
